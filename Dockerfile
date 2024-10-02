# STAGE 1
FROM oven/bun:canary-alpine AS base

WORKDIR /app

COPY package.json bun.lockb /app/

RUN bun install 

COPY . .

RUN bun run build


EXPOSE 3000

CMD [ "bun", "run", "start" ]



