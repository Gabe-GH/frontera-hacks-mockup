"use server";

// lib/serverActions.ts
import clientPromise from "@/app/db/mongodb";

type SampleDataItem = {
  name: string;
};

export async function fetchDataSample(): Promise<SampleDataItem[]> {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const data = await db.collection("users").find({}).toArray();

    return data.map((item: any) => ({
      name: item.name,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

import { z } from "zod";

const exampleUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

// lib/serverActions.ts
export async function createExampleUser(
  name: string,
  email: string
): Promise<void> {
  try {
    // Validate inputs
    exampleUserSchema.parse({ name, email });

    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");

    await usersCollection.insertOne({ name, email });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to create user");
  }
}
