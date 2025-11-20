FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

RUN mkdir -p /app/build
COPY --from=builder /app/dist ./build
CMD ["/bin/sh", "-c", "echo Build complete; sleep 1"]