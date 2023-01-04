/*
  Warnings:

  - You are about to alter the column `image` on the `Track` table. The data in that column could be lost. The data in that column will be cast from `String` to `Binary`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Track" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "createdAt" TEXT,
    "location" TEXT NOT NULL,
    "bpm" TEXT,
    "album" TEXT,
    "fileType" TEXT NOT NULL,
    "initialKey" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "year" TEXT,
    "image" BLOB,
    "plays" TEXT,
    "biterate" TEXT NOT NULL,
    "samplerate" TEXT
);
INSERT INTO "new_Track" ("album", "biterate", "bpm", "createdAt", "fileType", "id", "image", "initialKey", "length", "location", "plays", "samplerate", "size", "title", "year") SELECT "album", "biterate", "bpm", "createdAt", "fileType", "id", "image", "initialKey", "length", "location", "plays", "samplerate", "size", "title", "year" FROM "Track";
DROP TABLE "Track";
ALTER TABLE "new_Track" RENAME TO "Track";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
