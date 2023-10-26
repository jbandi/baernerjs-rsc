import { db, MessageRow } from "@/app/api/db";
import { promisify } from "util";

const QUERY = "SELECT * FROM MESSAGE WHERE ID = 1";

export async function fetchData(): Promise<string> {
  const row = await db.get<MessageRow>(QUERY);
  return row.text;
}

export async function fetchAllData(): Promise<MessageRow[]> {
  const rows = await db.all<MessageRow>("SELECT * FROM MESSAGE");
  return rows;
}
