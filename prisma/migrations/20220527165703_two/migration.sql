/*
  Warnings:

  - You are about to drop the `_id` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categorieId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `article` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `_id` DROP FOREIGN KEY `_id_A_fkey`;

-- DropForeignKey
ALTER TABLE `_id` DROP FOREIGN KEY `_id_B_fkey`;

-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `Article_authorId_fkey`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `categorieId` INTEGER NOT NULL,
    MODIFY `authorId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_id`;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
