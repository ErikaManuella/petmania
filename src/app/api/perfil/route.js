import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const result = await db.query('SELECT * FROM aluno')
    return NextResponse.json(result.rows);
}