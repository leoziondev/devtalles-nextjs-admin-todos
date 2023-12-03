# NextJS 14 Admin Todos APP - Next API Routes
Basic RESTFul API Handlers in NextJS 14

## Topics study in this project
* NextJS 14
* Prisma
* PostgreSQL
* Yup Validator
* Docker
* SEED
* READ
* POST
* UPDATE
* Simple Paginate

## How to run this project

### Developmnet
1. Start database
```
docker compose up -d
```

2. Copy .env.example and rename to .env
3. Replace environment variables
4. Execute command ``` npm install ```
5. Execute command ``` npm run dev ```
6. Execute this Prisma commands:
```
npx prisma migrate dev
npx prisma generate
```
7. Execute SEED to [create local data db](localhost:3000/api/seed)


### Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

