/*
  Warnings:

  - The primary key for the `SkillsOnExperiences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `skillsId` on the `SkillsOnExperiences` table. All the data in the column will be lost.
  - Added the required column `skillId` to the `SkillsOnExperiences` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SkillsOnExperiences" (
    "experienceId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    PRIMARY KEY ("experienceId", "skillId"),
    CONSTRAINT "SkillsOnExperiences_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SkillsOnExperiences_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SkillsOnExperiences" ("experienceId") SELECT "experienceId" FROM "SkillsOnExperiences";
DROP TABLE "SkillsOnExperiences";
ALTER TABLE "new_SkillsOnExperiences" RENAME TO "SkillsOnExperiences";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
