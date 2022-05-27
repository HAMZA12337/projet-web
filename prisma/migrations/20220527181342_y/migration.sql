/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.
  - Made the column `label` on table `categorie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categorie` MODIFY `label` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Categorie_label_key` ON `Categorie`(`label`);
