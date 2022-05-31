-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'AUTHOR') NOT NULL DEFAULT 'AUTHOR',

    UNIQUE INDEX `Utilisateur_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `titre` VARCHAR(255) NOT NULL,
    `authorId` INTEGER NULL,
   

    
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commentaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NULL,
    `` INTEGER NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_id` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_id_AB_unique`(`A`, `B`),
    INDEX `_id_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Utilisateur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_commmentaireId_fkey` FOREIGN KEY (`commmentaireId`) REFERENCES `Commentaire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commentaire` ADD CONSTRAINT `Commentaire_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Utilisateur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_id` ADD CONSTRAINT `_id_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_id` ADD CONSTRAINT `_id_B_fkey` FOREIGN KEY (`B`) REFERENCES `Categorie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;


Alter table Utilisateur AUTO_INCREMENT=1 ;
Alter table  article AUTO_INCREMENT=1 ;
Alter table commentaire AUTO_INCREMENT=1 ;
Alter table Categorie AUTO_INCREMENT=1 ;
ALTER TABLE `blog`.`commentaire` DROP INDEX `Commentaire_articleId_key`, ADD INDEX `Commentaire_articleId_key` (`articleId`) USING BTREE;