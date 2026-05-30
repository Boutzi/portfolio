import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "package.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    const version = jsonData.version;

    if (!version) {
      return NextResponse.json({ error: "Version not found" }, { status: 404 });
    }

    return NextResponse.json({ version }, { status: 200 });
  } catch (err) {
    console.error("Error reading package.json:", err);
    return NextResponse.json({ error: "Failed to read or parse package.json" }, { status: 500 });
  }
}
