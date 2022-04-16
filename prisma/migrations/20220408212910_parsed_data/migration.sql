/*
  Warnings:

  - Added the required column `expiry` to the `OptionPosition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_type` to the `OptionPosition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strike_price` to the `OptionPosition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OptionPosition" ADD COLUMN     "expiry" TEXT NOT NULL,
ADD COLUMN     "option_type" TEXT NOT NULL,
ADD COLUMN     "strike_price" TEXT NOT NULL;
