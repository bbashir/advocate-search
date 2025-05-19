import { NextRequest } from "next/server";
import db from "@/db";
import { advocates } from "@/db/schema";
import { ilike, or, eq, sql } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchText = request.nextUrl.searchParams.get("search");

  if (!searchText) {
    const data = await db.select().from(advocates);
    return Response.json(data);
  }

  // Try to parse numeric values
  const numericSearch = Number(searchText);

  const data = await db
    .select()
    .from(advocates)
    .where(
      or(
        ilike(advocates.firstName, `%${searchText}%`),
        ilike(advocates.lastName, `%${searchText}%`),
        ilike(advocates.city, `%${searchText}%`),
        ilike(advocates.degree, `%${searchText}%`),
        ...(!isNaN(numericSearch) ? [
          eq(advocates.yearsOfExperience, numericSearch),
          eq(advocates.phoneNumber, numericSearch)
        ] : []),
        sql`${advocates.specialties}::text ILIKE ${`%${searchText}%`}`
      )
    );

  return Response.json(data);
}