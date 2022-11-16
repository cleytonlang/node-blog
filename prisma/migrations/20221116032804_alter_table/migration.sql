/*
  Warnings:

  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `id_client` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clients_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "clients";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "id_deliveyman" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "end_at" TEXT NOT NULL,
    CONSTRAINT "deliveries_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_id_deliveyman_fkey" FOREIGN KEY ("id_deliveyman") REFERENCES "deliveryman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("created_at", "end_at", "id", "id_deliveyman", "item_name") SELECT "created_at", "end_at", "id", "id_deliveyman", "item_name" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
