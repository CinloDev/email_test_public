import { NextRequest, NextResponse } from 'next/server';
import { MOCK_EMAILS } from '@/lib/seeder';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q')?.toLowerCase();
    
    if (query) {
      const filtered = MOCK_EMAILS.filter(email => 
        email.subject.toLowerCase().includes(query) ||
        email.from_address.toLowerCase().includes(query) ||
        email.text_content.toLowerCase().includes(query)
      );
      return NextResponse.json(filtered);
    }
    
    return NextResponse.json(MOCK_EMAILS);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch emails' }, { status: 500 });
  }
}

export async function DELETE() {
  return NextResponse.json({ message: 'Mock delete successful' });
}
