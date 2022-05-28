/*
  Warnings:

  - Made the column `authorId` on table `commentaire` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `commentaire` DROP FOREIGN KEY `Commentaire_authorId_fkey`;

-- AlterTable
ALTER TABLE `commentaire` MODIFY `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
