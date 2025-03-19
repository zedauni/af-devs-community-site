CREATE TABLE `Media` (
	`id` varchar(26) NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`filePath` varchar(255) NOT NULL,
	`fileSize` bigint NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`createdBy` varchar(26) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	`status` varchar(20) NOT NULL DEFAULT 'default',
	CONSTRAINT `Media_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `Media_name_key` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `Post` (
	`id` varchar(26) NOT NULL,
	`kind` varchar(50) NOT NULL DEFAULT 'article',
	`parentId` varchar(26),
	`createdBy` varchar(26) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	CONSTRAINT `Post_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `PostToTag` (
	`postId` varchar(26) NOT NULL,
	`tagId` varchar(26) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	CONSTRAINT `PostToTag_postId_tagId_pk` PRIMARY KEY(`postId`,`tagId`)
);
--> statement-breakpoint
CREATE TABLE `PostTranslation` (
	`id` varchar(26) NOT NULL,
	`postId` varchar(26) NOT NULL,
	`imageId` varchar(26),
	`status` varchar(20) NOT NULL DEFAULT 'draft',
	`publishedAt` datetime,
	`title` varchar(255) NOT NULL,
	`surTitle` varchar(255),
	`subTitle` varchar(255),
	`postScriptum` varchar(1024),
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`excerptRendered` text,
	`content` text NOT NULL,
	`contentRendered` text NOT NULL,
	`locale` varchar(10) NOT NULL,
	`idealSearchTerm` varchar(255),
	`canonicalUrl` varchar(255),
	`metaData` json,
	`createdBy` varchar(26) NOT NULL,
	`updatedBy` varchar(26),
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	CONSTRAINT `PostTranslation_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `PostTranslation_slug_key` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `Tag` (
	`id` varchar(26) NOT NULL,
	`parentId` varchar(26),
	`kind` varchar(20) NOT NULL DEFAULT 'tag',
	`createdBy` varchar(26) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	CONSTRAINT `Tag_id_pk` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `TagTranslation` (
	`id` varchar(26) NOT NULL,
	`tagId` varchar(26) NOT NULL,
	`imageId` varchar(26),
	`status` varchar(20) NOT NULL DEFAULT 'draft',
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`description` text,
	`descriptionRendered` text,
	`locale` varchar(10) NOT NULL,
	`createdBy` varchar(26) NOT NULL,
	`updatedBy` varchar(26),
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	CONSTRAINT `TagTranslation_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `TagTranslation_slug_key` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` varchar(26) NOT NULL,
	`name` varchar(100) NOT NULL,
	`lastName` varchar(100),
	`username` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`locale` varchar(10),
	`locked` boolean NOT NULL DEFAULT false,
	`validated` boolean NOT NULL DEFAULT false,
	`lastLogin` datetime,
	`confirmationKey` varchar(255),
	`passwordResetToken` varchar(255),
	`passwordResetTokenExpiresAt` datetime,
	`passwordResetTokenEmailsSent` smallint NOT NULL DEFAULT 0,
	`privateKey` varchar(255),
	`apiKey` varchar(255),
	`avatar` varchar(26),
	`birthday` date,
	`bio` text,
	`newsletter` boolean NOT NULL DEFAULT false,
	`gender` varchar(1),
	`phone` varchar(20),
	`mainUrl` varchar(255),
	`externalId` varchar(255),
	`corporation` varchar(255),
	`note` text,
	`createdAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`updatedAt` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	`deletedAt` datetime,
	`status` varchar(20) NOT NULL DEFAULT 'default',
	CONSTRAINT `User_id_pk` PRIMARY KEY(`id`),
	CONSTRAINT `User_username_key` UNIQUE(`username`),
	CONSTRAINT `User_email_key` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `Media` ADD CONSTRAINT `Media_createdBy_User_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `Post` ADD CONSTRAINT `Post_createdBy_User_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `Post` ADD CONSTRAINT `Post_parentId_Post_id_fk` FOREIGN KEY (`parentId`) REFERENCES `Post`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_postId_Post_id_fk` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_tagId_Tag_id_fk` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_postId_Post_id_fk` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_imageId_Media_id_fk` FOREIGN KEY (`imageId`) REFERENCES `Media`(`id`) ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_createdBy_User_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `PostTranslation` ADD CONSTRAINT `PostTranslation_updatedBy_User_id_fk` FOREIGN KEY (`updatedBy`) REFERENCES `User`(`id`) ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_createdBy_User_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_parentId_Tag_id_fk` FOREIGN KEY (`parentId`) REFERENCES `Tag`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_tagId_Tag_id_fk` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_imageId_Media_id_fk` FOREIGN KEY (`imageId`) REFERENCES `Media`(`id`) ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_createdBy_User_id_fk` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `TagTranslation` ADD CONSTRAINT `TagTranslation_updatedBy_User_id_fk` FOREIGN KEY (`updatedBy`) REFERENCES `User`(`id`) ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `User` ADD CONSTRAINT `User_avatar_Media_id_fk` FOREIGN KEY (`avatar`) REFERENCES `Media`(`id`) ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `Media_createdBy_idx` ON `Media` (`createdBy`);--> statement-breakpoint
CREATE INDEX `Media_mimeType_idx` ON `Media` (`mimeType`);--> statement-breakpoint
CREATE INDEX `Media_status_idx` ON `Media` (`status`);--> statement-breakpoint
CREATE INDEX `Post_createdBy_idx` ON `Post` (`createdBy`);--> statement-breakpoint
CREATE INDEX `Post_parentId_idx` ON `Post` (`parentId`);--> statement-breakpoint
CREATE INDEX `Post_kind_idx` ON `Post` (`kind`);--> statement-breakpoint
CREATE INDEX `PostToTag_postId_idx` ON `PostToTag` (`postId`);--> statement-breakpoint
CREATE INDEX `PostToTag_tagId_idx` ON `PostToTag` (`tagId`);--> statement-breakpoint
CREATE INDEX `PostTranslation_createdBy_idx` ON `PostTranslation` (`createdBy`);--> statement-breakpoint
CREATE INDEX `PostTranslation_imageId_idx` ON `PostTranslation` (`imageId`);--> statement-breakpoint
CREATE INDEX `PostTranslation_title_surTitle_subTitle_idx` ON `PostTranslation` (`title`,`surTitle`,`subTitle`);--> statement-breakpoint
CREATE INDEX `PostTranslation_locale_idx` ON `PostTranslation` (`locale`);--> statement-breakpoint
CREATE INDEX `PostTranslation_postId_idx` ON `PostTranslation` (`postId`);--> statement-breakpoint
CREATE INDEX `PostTranslation_status_idx` ON `PostTranslation` (`status`);--> statement-breakpoint
CREATE INDEX `PostTranslation_updatedBy_idx` ON `PostTranslation` (`updatedBy`);--> statement-breakpoint
CREATE INDEX `Tag_createdBy_idx` ON `Tag` (`createdBy`);--> statement-breakpoint
CREATE INDEX `Tag_parentId_idx` ON `Tag` (`parentId`);--> statement-breakpoint
CREATE INDEX `Tag_kind_idx` ON `Tag` (`kind`);--> statement-breakpoint
CREATE INDEX `TagTranslation_createdBy_idx` ON `TagTranslation` (`createdBy`);--> statement-breakpoint
CREATE INDEX `TagTranslation_imageId_idx` ON `TagTranslation` (`imageId`);--> statement-breakpoint
CREATE INDEX `TagTranslation_title_idx` ON `TagTranslation` (`title`);--> statement-breakpoint
CREATE INDEX `TagTranslation_locale_idx` ON `TagTranslation` (`locale`);--> statement-breakpoint
CREATE INDEX `TagTranslation_status_idx` ON `TagTranslation` (`status`);--> statement-breakpoint
CREATE INDEX `TagTranslation_tagId_idx` ON `TagTranslation` (`tagId`);--> statement-breakpoint
CREATE INDEX `TagTranslation_updatedBy_idx` ON `TagTranslation` (`updatedBy`);--> statement-breakpoint
CREATE INDEX `User_avatar_idx` ON `User` (`avatar`);--> statement-breakpoint
CREATE INDEX `User_status_idx` ON `User` (`status`);--> statement-breakpoint
CREATE INDEX `User_username_idx` ON `User` (`username`);--> statement-breakpoint
CREATE INDEX `User_name_lastName_corporation_idx` ON `User` (`name`,`lastName`,`corporation`);