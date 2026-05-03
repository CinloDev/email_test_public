import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Devolvemos un archivo de texto de ejemplo para cualquier adjunto
    const content = `Contenido de demostración para el adjunto ${id}.\n\nEste archivo es parte del portfolio de MailQuark de CinloDev.`;
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="demo-file.txt"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch attachment' }, { status: 500 });
  }
}
