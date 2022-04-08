-- CreateTable
CREATE TABLE "OptionPosition" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "option_type" TEXT NOT NULL,
    "strike_price" INTEGER NOT NULL,
    "tweeted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OptionPosition_pkey" PRIMARY KEY ("id")
);
