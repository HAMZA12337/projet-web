/*
  Warnings:

  - Added the required column `image` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `utilisateur` ADD COLUMN `description` VARCHAR(191) NULL;
