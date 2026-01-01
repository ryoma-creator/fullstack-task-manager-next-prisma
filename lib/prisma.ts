import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

//「公式ドキュメントと Next.js + Prisma の定番パターンを参考にしています」
//「目的は開発中に PrismaClient が増殖するのを防ぐためです」