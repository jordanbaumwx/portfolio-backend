-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photoURL" TEXT,
    "tagline" TEXT,
    "bio" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Profile" ("bio", "createdAt", "email", "id", "name", "photoURL", "tagline", "updatedAt") SELECT "bio", "createdAt", "email", "id", "name", "photoURL", "tagline", "updatedAt" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
CREATE INDEX "email" ON "Profile"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
