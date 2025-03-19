import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { reset, seed } from "drizzle-seed";
import { parseArgs } from "node:util";

import { hashPassword } from "~/composables/usePassword";
import {
  post,
  user,
  postTranslation,
  tag,
  tagTranslation,
  postToTag,
} from "../db/schema";
import * as schema from "../db/schema";

const options = {
  environment: { type: "string" as const },
};

const db = drizzle(process.env.DATABASE_URL!);

async function main(): Promise<void> {
  const {
    values: { environment },
  } = parseArgs({ options });

  if (environment === "development") {
    const passwordHash = await hashPassword("password");

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const user1: typeof user.$inferInsert = {
      email: "user1@host.local",
      name: "One",
      lastName: "User",
      username: "user1",
      password: passwordHash,
      validated: true,
      status: "active",
    };
    const user2: typeof user.$inferInsert = {
      email: "user2@host.local",
      name: "Two",
      lastName: "User",
      username: "user2",
      password: passwordHash,
      validated: true,
      status: "active",
    };

    console.info("STARTED...\n");

    console.info("DB cleaning...");

    // Reset the database
    // await reset(db, {
    //   user,
    //   post,
    //   postTranslation,
    //   tag,
    //   tagTranslation,
    //   media,
    //   postToTag,
    // });
    await reset(db, schema);

    console.info("DB cleaned...\n");

    console.info("Inserting specific users...");

    await db.insert(user).values([user1, user2]);

    console.info("Inserted specific users!\n")

    // Seed random data
    // await seed(db, { user, post, postTranslation, tag, tagTranslation, media, postToTag }, { count: 1000, version: '2', seed: 1 });

    console.info("User seeding...");

    await seed(db, {
      user,
    }).refine((funcs) => ({
      user: {
        count: 10,
        columns: {
          id: funcs.int({
            minValue: 10000000,
            maxValue: 20000000,
            isUnique: true,
          }),
          email: funcs.email(),
          name: funcs.firstName(),
          lastName: funcs.lastName(),
          username: funcs.int({
            minValue: 1,
            maxValue: 100000,
            isUnique: true,
          }),
          password: funcs.default({ defaultValue: passwordHash }),
          locale: funcs.valuesFromArray({
            values: ["en", "fr"],
          }),
          validated: funcs.boolean(),
          lastLogin: funcs.date({
            maxDate: today,
          }),
          passwordResetTokenEmailsSent: funcs.int({
            minValue: 0,
            maxValue: 10,
          }),
          passwordResetTokenExpiresAt: funcs.date(),
          bio: funcs.loremIpsum({ sentencesCount: 2 }),
          gender: funcs.valuesFromArray({
            values: ["m", "f"],
          }),
          phone: funcs.phoneNumber({ template: "+### ##########" }),
          mainUrl: funcs.default({ defaultValue: null }),
          externalId: funcs.default({ defaultValue: null }),
          corporation: funcs.default({ defaultValue: null }),
          note: funcs.loremIpsum({ sentencesCount: 4 }),
          status: funcs.weightedRandom([
            {
              weight: 0.6,
              value: funcs.default({ defaultValue: "active" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "pending" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "created" }),
            },
          ]),
          avatar: funcs.default({ defaultValue: null }),
          birthday: funcs.date({
            maxDate: today,
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));

    const users = await db.select().from(user);

    console.info("User seeded!\n");

    console.info("Tag seeding...");

    await seed(db, {
      tag,
    }).refine((funcs) => ({
      tag: {
        count: 10,
        columns: {
          id: funcs.int({
            minValue: 10000000,
            maxValue: 20000000,
            isUnique: true,
          }),
          kind: funcs.valuesFromArray({
            values: ["category", "tag"],
          }),
          createdBy: funcs.valuesFromArray({
            values: users.map((u) => u.id!),
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));

    console.info("Tag seeded!\n");

    console.info("PostTranslation seeding...");

    const tags = await db.select().from(tag);

    await seed(db, {
      tagTranslation,
    }).refine((funcs) => ({
      tagTranslation: {
        count: 10,
        columns: {
          id: funcs.int({
            minValue: 10000000,
            maxValue: 20000000,
            isUnique: true,
          }),
          title: funcs.loremIpsum({sentencesCount: 1}),
          slug: funcs.uuid(),
          description: funcs.loremIpsum({ sentencesCount: 3 }),
          descriptionRendered: funcs.loremIpsum({ sentencesCount: 3 }),
          status: funcs.weightedRandom([
            {
              weight: 0.6,
              value: funcs.default({ defaultValue: "published" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "pending" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "created" }),
            },
          ]),
          locale: funcs.weightedRandom([
            {
              weight: 0.5,
              value: funcs.default({ defaultValue: "en" }),
            },
            {
              weight: 0.5,
              value: funcs.default({ defaultValue: "fr" }),
            },
          ]),
          imageId: funcs.default({ defaultValue: null }),
          tagId: funcs.valuesFromArray({
            values: tags.map((t) => t.id!),
          }),
          createdBy: funcs.valuesFromArray({
            values: users.map((u) => u.id!),
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));

    console.info("PostTranslation seeded!\n");

    console.info("Post seeding...");

    await seed(db, {
      post,
    }).refine((funcs) => ({
      post: {
        count: 10,
        columns: {
          id: funcs.int({
            minValue: 10000000,
            maxValue: 20000000,
            isUnique: true,
          }),
          kind: funcs.valuesFromArray({
            values: ["article"],
          }),
          createdBy: funcs.valuesFromArray({
            values: users.map((u) => u.id!),
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));

    console.info("Post seeded!\n");

    console.info("PostTranslation seeding...");

    const posts = await db.select().from(post);

    await seed(db, {
      postTranslation,
    }).refine((funcs) => ({
      postTranslation: {
        count: 10,
        columns: {
          id: funcs.int({
            minValue: 10000000,
            maxValue: 20000000,
            isUnique: true,
          }),
          title: funcs.loremIpsum({sentencesCount: 1}),
          surTitle: funcs.loremIpsum({sentencesCount: 1}),
          subTitle: funcs.loremIpsum({sentencesCount: 1}),
          postScriptum: funcs.loremIpsum({sentencesCount: 1}),
          slug: funcs.uuid(),
          excerpt: funcs.loremIpsum({ sentencesCount: 3 }),
          excerptRendered: funcs.loremIpsum({ sentencesCount: 3 }),
          content: funcs.loremIpsum({ sentencesCount: 50 }),
          contentRendered: funcs.loremIpsum({ sentencesCount: 50 }),
          idealSearchTerm: funcs.loremIpsum({ sentencesCount: 1 }),
          canonicalUrl: funcs.uuid(),
          status: funcs.weightedRandom([
            {
              weight: 0.6,
              value: funcs.default({ defaultValue: "published" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "pending" }),
            },
            {
              weight: 0.2,
              value: funcs.default({ defaultValue: "created" }),
            },
          ]),
          publishedAt: funcs.default({ defaultValue: new Date() }),
          locale: funcs.weightedRandom([
            {
              weight: 0.5,
              value: funcs.default({ defaultValue: "en" }),
            },
            {
              weight: 0.5,
              value: funcs.default({ defaultValue: "fr" }),
            },
          ]),
          imageId: funcs.default({
            defaultValue: undefined,
          }),
          postId: funcs.valuesFromArray({
            values: posts.map((p) => p.id!),
          }),
          createdBy: funcs.valuesFromArray({
            values: users.map((u) => u.id!),
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));
    console.info("postTranslation seeded!\n");

    console.info("PostToTag seeding...");

    await seed(db, {
      postToTag,
    }).refine((funcs) => ({
      postToTag: {
        count: 10,
        columns: {
          postId: funcs.valuesFromArray({
            values: posts.map((p) => p.id!),
          }),
          tagId: funcs.valuesFromArray({
            values: tags.map((t) => t.id!),
          }),
          createdAt: funcs.date({
            minDate: yesterday,
            maxDate: today,
          }),
          updatedAt: funcs.default({ defaultValue: today }),
          deletedAt: funcs.default({ defaultValue: null }),
        },
      },
    }));
    console.info("PostToTag seeded!\n");

    console.info("SUCCESSFULLY ENDED!");
  } else {
    console.warn("Skipping seed data for non-development environment");
  }
}

main()
  .then(async () => {
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
