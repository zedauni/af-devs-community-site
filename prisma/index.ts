import { PrismaClient } from "@prisma/client";
import { ulid } from "ulid";

const prisma = new PrismaClient();

const prismaUlidIdClient = prisma.$extends({
  query: {
    $allModels: {
      async create({ model, args, query }) {
        // Transformer l'ID et les clés étrangères en minuscules
        if (args.data) {
          const data = args.data as Record<string, any>;
          Object.keys(data).forEach((key) => {
            if (
              typeof data[key] === "string" &&
              (key === "id" || key.endsWith("Id") || key.endsWith("By"))
            ) {
              data[key] = data[key].toLowerCase();
            }
          });
        }

        if (
          model !== "PostToTag" &&
          args.data &&
          typeof args.data === "object" &&
          !("id" in args.data)
        ) {
          args.data.id = ulid().toLowerCase();
        }

        const result = await query(args);

        if (result && typeof result === "object" && "id" in result) {
          if (typeof result.id === "string") {
            return { ...result, id: result.id.toLowerCase() };
          }
        }

        return result;
      },

      async createMany({ model, args, query }) {
        // Transformer les ID et les clés étrangères en minuscules
        if (args.data && Array.isArray(args.data)) {
          args.data.forEach((item) => {
            const dataItem = item as Record<string, any>;
            Object.keys(dataItem).forEach((key) => {
              if (
                typeof dataItem[key] === "string" &&
                (key === "id" || key.endsWith("Id") || key.endsWith("By"))
              ) {
                dataItem[key] = dataItem[key].toLowerCase();
              }
            });
          });
        }

        if (model !== "PostToTag" && Array.isArray(args.data)) {
          args.data = args.data.map((item: any) => {
            const data = item as Record<string, any>;
            if (data && typeof data === "object" && !("id" in data)) {
              return { ...data, id: ulid().toLowerCase() };
            }
            return item;
          });
        }

        const result = await query(args);

        if (Array.isArray(result)) {
          return result.map((item) => {
            if (item && typeof item === "object" && "id" in item) {
              if (typeof item.id === "string") {
                return { ...item, id: item.id.toLowerCase() };
              }
            }
            return item;
          });
        }

        return result;
      },
    },
  },
});

export default prismaUlidIdClient;
