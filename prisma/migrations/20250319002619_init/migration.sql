-- CreateTable
CREATE TABLE `Media` (
    `id` VARCHAR(26) NOT NULL,
    `mimeType` VARCHAR(100) NOT NULL,
    `filePath` VARCHAR(255) NOT NULL,
    `fileSize` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `createdBy` VARCHAR(26) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'default',

    UNIQUE INDEX `Media_name_key`(`name`),
    INDEX `Media_createdBy_idx`(`createdBy`),
    INDEX `Media_mimeType_idx`(`mimeType`),
    INDEX `Media_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(26) NOT NULL,
    `kind` VARCHAR(50) NOT NULL DEFAULT 'article',
    `parentId` VARCHAR(26) NULL,
    `createdBy` VARCHAR(26) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    INDEX `Post_createdBy_idx`(`createdBy`),
    INDEX `Post_parentId_idx`(`parentId`),
    INDEX `Post_kind_idx`(`kind`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostTranslation` (
    `id` VARCHAR(26) NOT NULL,
    `postId` VARCHAR(26) NOT NULL,
    `imageId` VARCHAR(26) NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'draft',
    `publishedAt` DATETIME(3) NULL,
    `title` VARCHAR(255) NOT NULL,
    `surTitle` VARCHAR(255) NULL,
    `subTitle` VARCHAR(255) NULL,
    `postScriptum` VARCHAR(1024) NULL,
    `slug` VARCHAR(255) NOT NULL,
    `excerpt` TEXT NULL,
    `excerptRendered` TEXT NULL,
    `content` LONGTEXT NOT NULL,
    `contentRendered` LONGTEXT NOT NULL,
    `locale` VARCHAR(10) NOT NULL,
    `idealSearchTerm` VARCHAR(255) NULL,
    `canonicalUrl` VARCHAR(255) NULL,
    `metaData` JSON NULL,
    `createdBy` VARCHAR(26) NOT NULL,
    `updatedBy` VARCHAR(26) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `PostTranslation_slug_key`(`slug`),
    INDEX `PostTranslation_createdBy_idx`(`createdBy`),
    INDEX `PostTranslation_imageId_idx`(`imageId`),
    INDEX `PostTranslation_title_surTitle_subTitle_idx`(`title`, `surTitle`, `subTitle`),
    INDEX `PostTranslation_locale_idx`(`locale`),
    INDEX `PostTranslation_postId_idx`(`postId`),
    INDEX `PostTranslation_status_idx`(`status`),
    INDEX `PostTranslation_updatedBy_idx`(`updatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(26) NOT NULL,
    `parentId` VARCHAR(26) NULL,
    `kind` VARCHAR(20) NOT NULL DEFAULT 'tag',
    `createdBy` VARCHAR(26) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    INDEX `Tag_createdBy_idx`(`createdBy`),
    INDEX `Tag_parentId_idx`(`parentId`),
    INDEX `Tag_kind_idx`(`kind`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TagTranslation` (
    `id` VARCHAR(26) NOT NULL,
    `tagId` VARCHAR(26) NOT NULL,
    `imageId` VARCHAR(26) NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'draft',
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `descriptionRendered` TEXT NULL,
    `locale` VARCHAR(10) NOT NULL,
    `createdBy` VARCHAR(26) NOT NULL,
    `updatedBy` VARCHAR(26) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `TagTranslation_slug_key`(`slug`),
    INDEX `TagTranslation_createdBy_idx`(`createdBy`),
    INDEX `TagTranslation_imageId_idx`(`imageId`),
    INDEX `TagTranslation_title_idx`(`title`),
    INDEX `TagTranslation_locale_idx`(`locale`),
    INDEX `TagTranslation_status_idx`(`status`),
    INDEX `TagTranslation_tagId_idx`(`tagId`),
    INDEX `TagTranslation_updatedBy_idx`(`updatedBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostToTag` (
    `postId` VARCHAR(26) NOT NULL,
    `tagId` VARCHAR(26) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `PostToTag_postId_idx`(`postId`),
    INDEX `PostToTag_tagId_idx`(`tagId`),
    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(26) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `locale` VARCHAR(10) NULL,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `validated` BOOLEAN NOT NULL DEFAULT false,
    `lastLogin` DATETIME(3) NULL,
    `confirmationKey` VARCHAR(255) NULL,
    `passwordResetToken` VARCHAR(255) NULL,
    `passwordResetTokenExpiresAt` DATETIME(3) NULL,
    `passwordResetTokenEmailsSent` INTEGER NOT NULL DEFAULT 0,
    `privateKey` VARCHAR(255) NULL,
    `apiKey` VARCHAR(255) NULL,
    `avatar` VARCHAR(26) NULL,
    `birthday` DATE NULL,
    `bio` TEXT NULL,
    `newsletter` BOOLEAN NOT NULL DEFAULT false,
    `gender` VARCHAR(10) NULL,
    `phone` VARCHAR(20) NULL,
    `mainUrl` VARCHAR(255) NULL,
    `externalId` VARCHAR(255) NULL,
    `corporation` VARCHAR(255) NULL,
    `note` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'default',

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_avatar_idx`(`avatar`),
    INDEX `User_status_idx`(`status`),
    INDEX `User_username_idx`(`username`),
    INDEX `User_name_lastName_corporation_idx`(`name`, `lastName`, `corporation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Media` ADD CONSTRAINT `Media_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_avatar_fkey` FOREIGN KEY (`avatar`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
