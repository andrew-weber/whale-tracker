/*
  Warnings:

  - A unique constraint covering the columns `[tweet_id]` on the table `OptionPosition` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tweet_id` to the `OptionPosition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OptionPosition" ADD COLUMN     "tweet_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OptionPosition_tweet_id_key" ON "OptionPosition"("tweet_id");
