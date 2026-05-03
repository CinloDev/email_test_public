// Forced refresh
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_EMAILS, MOCK_ATTACHMENTS } from '../../../../lib/mock-emails';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const email = MOCK_EMAILS.find(e => e.id === id);
    if (!email) return NextResponse.json({ error: 'Email not found' }, { status: 404 });

    const attachments = MOCK_ATTACHMENTS[id] || [];
    
    return NextResponse.json({ ...email, attachments });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch email details' }, { status: 500 });
  }
}

export async function DELETE() {
  return NextResponse.json({ message: 'Mock delete successful' });
}
