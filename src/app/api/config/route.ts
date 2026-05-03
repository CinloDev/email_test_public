import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    smtpPort: '1025',
    maxEmails: 500,
    hasPassword: false // Desactivamos el password para el portfolio
  });
}
