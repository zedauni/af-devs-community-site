import { sql } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";

export const timestampsNoDelete = {
	createdAt: datetime().default(sql`(CURRENT_TIMESTAMP())`).notNull(),
	updatedAt: datetime().default(sql`(CURRENT_TIMESTAMP())`).notNull(),
}

export const timestamps = {
	...timestampsNoDelete,
	deletedAt: datetime(),
}
