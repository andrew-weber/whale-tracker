## Create new migration

```
docker compose up db -d
DATABASE_URL=postgresql://wt:password@localhost:5432/whale_tracker prisma migrate dev --name <migration name> --create-only
# make changes
DATABASE_URL=postgresql://wt:password@localhost:5432/whale_tracker prisma migrate dev
# `prisma generate` i think?
```
