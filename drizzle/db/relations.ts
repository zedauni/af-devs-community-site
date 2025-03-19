import { relations } from "drizzle-orm/relations";
import { user, media, post, postToTag, tag, postTranslation, tagTranslation } from "./schema";

export const mediaRelations = relations(media, ({one, many}) => ({
	user: one(user, {
		fields: [media.createdBy],
		references: [user.id],
		relationName: "media_createdBy_user_id"
	}),
	postTranslations: many(postTranslation),
	tagTranslations: many(tagTranslation),
	users: many(user, {
		relationName: "user_avatar_media_id"
	}),
}));

export const userRelations = relations(user, ({one, many}) => ({
	media_createdBy: many(media, {
		relationName: "media_createdBy_user_id"
	}),
	posts: many(post),
	postTranslations_createdBy: many(postTranslation, {
		relationName: "postTranslation_createdBy_user_id"
	}),
	postTranslations_updatedBy: many(postTranslation, {
		relationName: "postTranslation_updatedBy_user_id"
	}),
	tags: many(tag),
	tagTranslations_createdBy: many(tagTranslation, {
		relationName: "tagTranslation_createdBy_user_id"
	}),
	tagTranslations_updatedBy: many(tagTranslation, {
		relationName: "tagTranslation_updatedBy_user_id"
	}),
	media_avatar: one(media, {
		fields: [user.avatar],
		references: [media.id],
		relationName: "user_avatar_media_id"
	}),
}));

export const postRelations = relations(post, ({one, many}) => ({
	user: one(user, {
		fields: [post.createdBy],
		references: [user.id]
	}),
	post: one(post, {
		fields: [post.parentId],
		references: [post.id],
		relationName: "post_parentId_post_id"
	}),
	posts: many(post, {
		relationName: "post_parentId_post_id"
	}),
	postToTags: many(postToTag),
	postTranslations: many(postTranslation),
}));

export const postToTagRelations = relations(postToTag, ({one}) => ({
	post: one(post, {
		fields: [postToTag.postId],
		references: [post.id]
	}),
	tag: one(tag, {
		fields: [postToTag.tagId],
		references: [tag.id]
	}),
}));

export const tagRelations = relations(tag, ({one, many}) => ({
	postToTags: many(postToTag),
	user: one(user, {
		fields: [tag.createdBy],
		references: [user.id]
	}),
	tag: one(tag, {
		fields: [tag.parentId],
		references: [tag.id],
		relationName: "tag_parentId_tag_id"
	}),
	tags: many(tag, {
		relationName: "tag_parentId_tag_id"
	}),
	tagTranslations: many(tagTranslation),
}));

export const postTranslationRelations = relations(postTranslation, ({one}) => ({
	user_createdBy: one(user, {
		fields: [postTranslation.createdBy],
		references: [user.id],
		relationName: "postTranslation_createdBy_user_id"
	}),
	media: one(media, {
		fields: [postTranslation.imageId],
		references: [media.id]
	}),
	post: one(post, {
		fields: [postTranslation.postId],
		references: [post.id]
	}),
	user_updatedBy: one(user, {
		fields: [postTranslation.updatedBy],
		references: [user.id],
		relationName: "postTranslation_updatedBy_user_id"
	}),
}));

export const tagTranslationRelations = relations(tagTranslation, ({one}) => ({
	user_createdBy: one(user, {
		fields: [tagTranslation.createdBy],
		references: [user.id],
		relationName: "tagTranslation_createdBy_user_id"
	}),
	media: one(media, {
		fields: [tagTranslation.imageId],
		references: [media.id]
	}),
	tag: one(tag, {
		fields: [tagTranslation.tagId],
		references: [tag.id]
	}),
	user_updatedBy: one(user, {
		fields: [tagTranslation.updatedBy],
		references: [user.id],
		relationName: "tagTranslation_updatedBy_user_id"
	}),
}));