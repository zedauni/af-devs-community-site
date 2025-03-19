import {
  mysqlTable,
  type AnyMySqlColumn,
  index,
  foreignKey,
  primaryKey,
  unique,
  varchar,
  bigint,
  text,
  datetime,
  boolean,
  json,
  date,
  smallint,
} from "drizzle-orm/mysql-core";
import { ulid } from "ulid";
import { timestamps, timestampsNoDelete } from "./columns.helpers";

export const user = mysqlTable(
  "User",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    name: varchar({ length: 100 }).notNull(),
    lastName: varchar({ length: 100 }),
    username: varchar({ length: 100 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    locale: varchar({ length: 10 }),
    locked: boolean().default(false).notNull(),
    validated: boolean().default(false).notNull(),
    lastLogin: datetime(),
    confirmationKey: varchar({ length: 255 }),
    passwordResetToken: varchar({ length: 255 }),
    passwordResetTokenExpiresAt: datetime(),
    passwordResetTokenEmailsSent: smallint().default(0).notNull(),
    privateKey: varchar({ length: 255 }),
    apiKey: varchar({ length: 255 }),
    avatar: varchar({ length: 26 }).references((): AnyMySqlColumn => media.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    // you can use { mode: 'date' }, if you want to have Date as type for this column else { mode: 'string'}
    birthday: date({ mode: "date" }),
    bio: text(),
    newsletter: boolean().default(false).notNull(),
    gender: varchar({ length: 1 }),
    phone: varchar({ length: 20 }),
    mainUrl: varchar({ length: 255 }),
    externalId: varchar({ length: 255 }),
    corporation: varchar({ length: 255 }),
    note: text(),
    ...timestamps,
    status: varchar({ length: 20 }).default("default").notNull(),
  },
  (table) => [
    index("User_avatar_idx").on(table.avatar),
    index("User_status_idx").on(table.status),
    index("User_username_idx").on(table.username),
    index("User_name_lastName_corporation_idx").on(
      table.name,
      table.lastName,
      table.corporation,
    ),
    primaryKey({ columns: [table.id] }),
    unique("User_username_key").on(table.username),
    unique("User_email_key").on(table.email),
  ],
);

export const tag = mysqlTable(
  "Tag",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    parentId: varchar({ length: 26 }),
    kind: varchar({ length: 20 }).default("tag").notNull(),
    createdBy: varchar({ length: 26 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    ...timestamps,
  },
  (table) => [
    index("Tag_createdBy_idx").on(table.createdBy),
    index("Tag_parentId_idx").on(table.parentId),
    index("Tag_kind_idx").on(table.kind),
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({ columns: [table.id] }),
  ],
);

export const tagTranslation = mysqlTable(
  "TagTranslation",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    tagId: varchar({ length: 26 })
      .notNull()
      .references(() => tag.id, { onDelete: "cascade", onUpdate: "cascade" }),
    imageId: varchar({ length: 26 }).references(() => media.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    status: varchar({ length: 20 }).default("draft").notNull(),
    title: varchar({ length: 255 }).notNull(),
    slug: varchar({ length: 255 }).notNull(),
    description: text(),
    descriptionRendered: text(),
    locale: varchar({ length: 10 }).notNull(),
    createdBy: varchar({ length: 26 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    updatedBy: varchar({ length: 26 }).references(() => user.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    ...timestamps,
  },
  (table) => [
    index("TagTranslation_createdBy_idx").on(table.createdBy),
    index("TagTranslation_imageId_idx").on(table.imageId),
    index("TagTranslation_title_idx").on(table.title),
    index("TagTranslation_locale_idx").on(table.locale),
    index("TagTranslation_status_idx").on(table.status),
    index("TagTranslation_tagId_idx").on(table.tagId),
    index("TagTranslation_updatedBy_idx").on(table.updatedBy),
    primaryKey({ columns: [table.id] }),
    unique("TagTranslation_slug_key").on(table.slug),
  ],
);

export const post = mysqlTable(
  "Post",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    kind: varchar({ length: 50 }).default("article").notNull(),
    parentId: varchar({ length: 26 }),
    createdBy: varchar({ length: 26 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    ...timestamps,
  },
  (table) => [
    index("Post_createdBy_idx").on(table.createdBy),
    index("Post_parentId_idx").on(table.parentId),
    index("Post_kind_idx").on(table.kind),
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    primaryKey({ columns: [table.id] }),
  ],
);

export const postTranslation = mysqlTable(
  "PostTranslation",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    postId: varchar({ length: 26 })
      .notNull()
      .references(() => post.id, { onDelete: "cascade", onUpdate: "cascade" }),
    imageId: varchar({ length: 26 }).references(() => media.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    status: varchar({ length: 20 }).default("draft").notNull(),
    publishedAt: datetime(),
    title: varchar({ length: 255 }).notNull(),
    surTitle: varchar({ length: 255 }),
    subTitle: varchar({ length: 255 }),
    postScriptum: varchar({ length: 1024 }),
    slug: varchar({ length: 255 }).notNull(),
    excerpt: text(),
    excerptRendered: text(),
    content: text().notNull(),
    contentRendered: text().notNull(),
    locale: varchar({ length: 10 }).notNull(),
    idealSearchTerm: varchar({ length: 255 }),
    canonicalUrl: varchar({ length: 255 }),
    metaData: json(),
    createdBy: varchar({ length: 26 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" }),
    updatedBy: varchar({ length: 26 }).references(() => user.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    ...timestamps,
  },
  (table) => [
    index("PostTranslation_createdBy_idx").on(table.createdBy),
    index("PostTranslation_imageId_idx").on(table.imageId),
    index("PostTranslation_title_surTitle_subTitle_idx").on(
      table.title,
      table.surTitle,
      table.subTitle,
    ),
    index("PostTranslation_locale_idx").on(table.locale),
    index("PostTranslation_postId_idx").on(table.postId),
    index("PostTranslation_status_idx").on(table.status),
    index("PostTranslation_updatedBy_idx").on(table.updatedBy),
    primaryKey({ columns: [table.id] }),
    unique("PostTranslation_slug_key").on(table.slug),
  ],
);

export const postToTag = mysqlTable(
  "PostToTag",
  {
    postId: varchar({ length: 26 })
      .notNull()
      .references(() => post.id, { onDelete: "cascade", onUpdate: "cascade" }),
    tagId: varchar({ length: 26 })
      .notNull()
      .references(() => tag.id, { onDelete: "cascade", onUpdate: "cascade" }),
    ...timestampsNoDelete,
  },
  (table) => [
    index("PostToTag_postId_idx").on(table.postId),
    index("PostToTag_tagId_idx").on(table.tagId),
    primaryKey({
      columns: [table.postId, table.tagId],
    }),
  ],
);

export const media = mysqlTable(
  "Media",
  {
    id: varchar("id", { length: 26 }).$defaultFn(() => ulid().toLowerCase()),
    mimeType: varchar({ length: 100 }).notNull(),
    filePath: varchar({ length: 255 }).notNull(),
    fileSize: bigint({ mode: "number" }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    createdBy: varchar({ length: 26 })
      .notNull()
      .references((): AnyMySqlColumn => user.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    ...timestamps,
    status: varchar({ length: 20 }).default("default").notNull(),
  },
  (table) => [
    index("Media_createdBy_idx").on(table.createdBy),
    index("Media_mimeType_idx").on(table.mimeType),
    index("Media_status_idx").on(table.status),
    primaryKey({ columns: [table.id] }),
    unique("Media_name_key").on(table.name),
  ],
);
