/*
  Warnings:

  - You are about to drop the column `commmentaireId` on the `article` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[articleId]` on the table `Commentaire` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `articleId` to the `Commentaire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `Article_commmentaireId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `commmentaireId`;

-- AlterTable
ALTER TABLE `commentaire` ADD COLUMN `articleId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Commentaire_articleId_key` ON `Commentaire`(`articleId`);

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
