/*
  Warnings:

  - You are about to drop the column `option_type` on the `OptionPosition` table. All the data in the column will be lost.
  - You are about to drop the column `strike_price` on the `OptionPosition` table. All the data in the column will be lost.
  - You are about to drop the column `tweeted_at` on the `OptionPosition` table. All the data in the column will be lost.
  - Added the required column `full_tweet` to the `OptionPosition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OptionPosition" DROP COLUMN "option_type",
DROP COLUMN "strike_price",
DROP COLUMN "tweeted_at",
ADD COLUMN     "full_tweet" TEXT NOT NULL;
