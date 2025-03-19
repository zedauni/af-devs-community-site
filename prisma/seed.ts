import { parseArgs } from "node:util";
// import { PrismaClient } from "@prisma/client";
import prisma from "~/prisma";
import { hashPassword } from "~/composables/usePassword";

const options = {
  environment: { type: "string" as const },
};

async function main(): Promise<void> {
  const {
    values: { environment },
  } = parseArgs({ options });

  if (environment === "development") {
    // Create users
    const hash1 = await hashPassword("password");
    const hash2 = await hashPassword("password");

    const user1 = await prisma.user.upsert({
      where: { email: "user1@host.local" },
      update: {},
      create: {
        email: "user1@host.local",
        name: "One",
        lastName: "User",
        username: "user1",
        password: hash1,
        validated: true,
        status: "active",
      },
    });

    const user2 = await prisma.user.upsert({
      where: { email: "user2@host.local" },
      update: {},
      create: {
        email: "user2@host.local",
        name: "Two",
        lastName: "User",
        username: "user2",
        password: hash2,
        validated: true,
        status: "active",
      },
    });

    // Create tags
    const tag1 = await prisma.tag.create({
      data: {
        kind: "category",
        createdBy: user1.id,
        translations: {
          create: [
            {
              title: "Technology",
              slug: "technology",
              status: "published",
              locale: "en",
              createdBy: user1.id,
            },
            {
              title: "Technologie",
              slug: "technologie",
              status: "published",
              locale: "fr",
              createdBy: user1.id,
            },
          ],
        },
      },
    });

    const tag2 = await prisma.tag.create({
      data: {
        kind: "tag",
        createdBy: user1.id,
        translations: {
          create: [
            {
              title: "Programming",
              slug: "programming",
              status: "published",
              locale: "en",
              createdBy: user1.id,
            },
            {
              title: "Programmation",
              slug: "programmation",
              status: "published",
              locale: "fr",
              createdBy: user1.id,
            },
          ],
        },
      },
    });

    // Create a post with translations and tags
    const post1 = await prisma.post.create({
      data: {
        kind: "article",
        createdBy: user1.id,
        translations: {
          create: {
            title: "Getting Started with ORM",
            slug: "getting-started-with-orm",
            content: "# Introduction\n\ORM is a...",
            contentRendered:
              "<h1>Introduction</h1><p>ORM is a..</p>",
            status: "published",
            locale: "en",
            createdBy: user1.id,
            publishedAt: new Date(),
          },
        },
        tags: {
          create: [{ tagId: tag1.id }, { tagId: tag2.id }],
        },
      },
    });

    // Create a child post (like a comment)
    const post2 = await prisma.post.create({
      data: {
        kind: "article",
        parentId: post1.id,
        createdBy: user2.id,
        translations: {
          create: {
            title: "Great Article",
            slug: "great-article",
            content: "This was very helpful!",
            contentRendered: "<p>This was very helpful!</p>",
            status: "published",
            locale: "en",
            createdBy: user2.id,
            publishedAt: new Date(),
          },
        },
      },
    });

    console.log(`Created users: ${user1.email}, ${user2.email}`);
    console.log(`Created posts: ${post1.id}, ${post2.id}`);
    console.log(`Created tags: ${tag1.id}, ${tag2.id}`);
  } else {
    console.log("Skipping seed data for non-development environment");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
