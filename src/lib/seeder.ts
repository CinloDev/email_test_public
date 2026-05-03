export const MOCK_EMAILS = [
  {
    id: '1',
    from_address: '"CinloDev 🚀" <hello@cinlodev.com>',
    to_address: 'usuario@ejemplo.com',
    subject: '¡Tu despliegue ha finalizado con éxito!',
    text_content: 'Hola Cinlo User! Tu proyecto AuraGym ya está online.',
    html_content: `
      <div style="background-color: #f9fafb; padding: 40px; font-family: sans-serif; color: #1f2937;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #e5e7eb;">
          <div style="padding: 24px; border-bottom: 1px solid #f3f4f6; background: linear-gradient(to right, #3b82f610, #a855f710);">
            <span style="font-size: 24px; font-weight: 800;">Cinlo <span style="color: #3b82f6;">Dev</span></span>
          </div>
          <div style="padding: 32px;">
            <h1 style="font-size: 24px; font-weight: 800; color: #111827;">¡Despliegue Exitoso! 👋</h1>
            <p style="color: #4b5563; line-height: 1.6;">Tu entorno de producción para <b>AuraGym Admin Portal</b> está configurado y funcionando.</p>
            <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">ID de Proyecto: <b>#DEV-9988-BETA</b></p>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b;">Estado: <span style="color: #10b981;">● Online</span></p>
            </div>
          </div>
        </div>
      </div>
    `,
    has_attachments: 1,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString() // Hace 5 min
  },
  {
    id: '2',
    from_address: '"Vercel" <noreply@vercel.com>',
    to_address: 'dev@cinlodev.com',
    subject: 'Deployment failed for mailquark-demo',
    text_content: 'Check your logs to see what happened.',
    html_content: `
      <div style="font-family: sans-serif; padding: 20px; color: #000;">
        <h2 style="color: #ff0000;">▲ Deployment Failed</h2>
        <p>The build failed because of an unresolved variable <code>{{DB_URL}}</code>.</p>
        <hr style="border: 0; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 14px; color: #666;">Project: mailquark-demo<br>Commit: 7a2b5e1</p>
      </div>
    `,
    has_attachments: 0,
    status: 'fail',
    created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString() // Hace 1 hora
  },
  {
    id: '3',
    from_address: '"Stripe" <invoice@stripe.com>',
    to_address: 'admin@cinlodev.com',
    subject: 'Your monthly invoice for April 2026',
    text_content: 'Attached is your invoice for $49.00',
    html_content: `
      <div style="font-family: sans-serif; padding: 40px; color: #333;">
        <h1 style="color: #635bff;">Stripe</h1>
        <p>Your payment of <b>$49.00 USD</b> was successful.</p>
        <div style="background: #f6f9fc; padding: 20px; border-radius: 4px;">
          <p style="margin: 0;">Plan: <b>CinloDev Pro Bundle</b></p>
          <p style="margin: 5px 0 0 0;">Date: April 15, 2026</p>
        </div>
      </div>
    `,
    has_attachments: 1,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // Ayer
  }
];

export const MOCK_ATTACHMENTS: Record<string, any[]> = {
  '1': [
    { id: 'att-1', filename: 'reporte_despliegue.pdf', size: 125000, content_type: 'application/pdf' }
  ],
  '3': [
    { id: 'att-2', filename: 'invoice_APR_2026.pdf', size: 45000, content_type: 'application/pdf' }
  ]
};
