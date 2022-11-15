-- This is an empty migration.

CREATE TABLE
    "etl_jobs" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "started_at" TEXT NOT NULL,
        "completed_at" INTEGER NOT NULL,
        CONSTRAINT "etl_jobs_id" PRIMARY KEY ("id")
    );