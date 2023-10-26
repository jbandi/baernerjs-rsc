"use server";
import { AsyncDatabase } from "promised-sqlite3";
import { MessageRow } from "@/app/api/db";
import { revalidatePath } from "next/cache";

export async function myAction(newValue: string) {
  console.log("myAction", newValue);

  const db = await AsyncDatabase.open("./db/db.sqlite");
  console.log("Connected to Database");

  await db.run(`insert into message(text) values ('${newValue}');`);
  const rows = await db.all<MessageRow>("SELECT * FROM MESSAGE");
  console.log("Action", rows);
  // revalidatePath("/");
}
