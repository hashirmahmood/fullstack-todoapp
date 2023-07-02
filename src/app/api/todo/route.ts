import { NextRequest, NextResponse } from 'next/server'
import { db } from '@vercel/postgres'

export function GET(request: NextRequest) {
  return NextResponse.json({ message: 'GET api function called' })
}
