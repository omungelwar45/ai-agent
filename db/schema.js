import { pgTable, integer, text, timestamp } from "drizzle-orm/pg-core";

export const ToDoTable = pgTable('todo', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  columnName: text('column_name'),
  todo: text('todo').notNull(),
  createdAt: timestamp('created_at').defaultNow(), // Automatically sets current timestamp on creation
  updatedAt: timestamp('updated_at').defaultNow(), // Set the default value for updates
});
