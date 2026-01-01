import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const task = await prisma.task.create({
    data: { title: "First Task" },
  });

  return NextResponse.json(task);
}

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}
