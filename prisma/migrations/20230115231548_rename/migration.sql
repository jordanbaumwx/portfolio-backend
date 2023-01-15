/*
  Warnings:

  - You are about to drop the `SkillsOnExperiences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillsOnExperiences" DROP CONSTRAINT "SkillsOnExperiences_experience_id_fkey";

-- DropForeignKey
ALTER TABLE "SkillsOnExperiences" DROP CONSTRAINT "SkillsOnExperiences_skill_id_fkey";

-- DropTable
DROP TABLE "SkillsOnExperiences";

-- CreateTable
CREATE TABLE "skills_on_experiences" (
    "experience_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,

    CONSTRAINT "skills_on_experiences_pkey" PRIMARY KEY ("experience_id","skill_id")
);

-- AddForeignKey
ALTER TABLE "skills_on_experiences" ADD CONSTRAINT "skills_on_experiences_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_on_experiences" ADD CONSTRAINT "skills_on_experiences_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
