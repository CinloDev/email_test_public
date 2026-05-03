export const MOCK_EMAILS = [
  {
    id: '1',
    from_address: '"MailQuark HQ 🚀" <no-reply@mailquark.io>',
    to_address: 'dev@cinlodev.com',
    subject: 'Welcome to the Future of Email Testing! 🌟',
    text_content: 'Hi {{name}}! We are thrilled to have you here. Start testing your emails with MailQuark today.',
    html_content: `
      <div style="background-color: #0f172a; padding: 40px; font-family: 'Inter', -apple-system, sans-serif; color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(30, 41, 59, 0.7); border-radius: 24px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);">
          <div style="padding: 40px; text-align: center; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -1px;">MailQuark</h1>
          </div>
          <div style="padding: 40px;">
            <h2 style="font-size: 24px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">Welcome aboard, {{name}}!</h2>
            <p style="color: #94a3b8; line-height: 1.8; font-size: 16px;">You've just unlocked the most powerful environment for <b>QA Email Testing</b>. Intercept, inspect, and validate your templates with surgical precision.</p>
            
            <div style="margin: 32px 0; padding: 24px; background: rgba(15, 23, 42, 0.5); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05);">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #3b82f6;">Next Steps:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; line-height: 2;">
                <li>Configure your SMTP to <code>localhost:1025</code></li>
                <li>Send your first test template</li>
                <li>Check for unreplaced variables</li>
              </ul>
            </div>

            <a href="https://mailquark.io/docs" style="display: inline-block; width: 100%; padding: 16px; background: #3b82f6; color: white; text-align: center; border-radius: 12px; font-weight: 600; text-decoration: none; transition: all 0.2s;">Go to Dashboard</a>
            
            <p style="margin-top: 32px; font-size: 12px; color: #64748b; text-align: center;">
              This is an automated message. No need to reply.
            </p>
          </div>
        </div>
      </div>
    `,
    has_attachments: 0,
    status: 'fail', // Fail because of {{name}}
    created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  },
  {
    id: '2',
    from_address: '"Apple Billing" <no-reply@apple.com>',
    to_address: 'finance@cinlodev.com',
    subject: 'Your receipt from Apple for Order #MQ-88229',
    text_content: 'Thank you for your purchase. Total: $12.99',
    html_content: `
      <div style="background-color: #ffffff; padding: 40px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #1d1d1f;">
        <div style="max-width: 600px; margin: 0 auto;">
          <div style="padding: 20px 0; border-bottom: 1px solid #d2d2d7;">
             <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png" width="24" height="24" alt="Apple" style="display: block;">
          </div>
          <div style="padding: 40px 0;">
            <h1 style="font-size: 32px; font-weight: 600; margin-bottom: 8px;">Receipt</h1>
            <p style="color: #6e6e73; font-size: 14px;">Order ID: MQ-88229<br>Date: May 3, 2026</p>
            
            <div style="margin-top: 40px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #d2d2d7;">
                  <td style="padding: 16px 0; font-weight: 600;">iCloud+ with 2TB Storage</td>
                  <td style="padding: 16px 0; text-align: right;">$9.99</td>
                </tr>
                <tr style="border-bottom: 1px solid #d2d2d7;">
                  <td style="padding: 16px 0; font-weight: 600;">Apple Arcade Monthly</td>
                  <td style="padding: 16px 0; text-align: right;">$4.99</td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; font-weight: 600; font-size: 18px;">Total</td>
                  <td style="padding: 16px 0; text-align: right; font-weight: 600; font-size: 18px;">$14.98</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 40px; padding: 24px; background: #f5f5f7; border-radius: 12px;">
              <p style="margin: 0; font-size: 12px; color: #86868b; line-height: 1.5;">
                The items above will be billed to your credit card ending in **4422. 
                If you have questions, please visit Apple Support.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    has_attachments: 1,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
  },
  {
    id: '3',
    from_address: '"Security Team" <security@github.com>',
    to_address: 'admin@cinlodev.com',
    subject: '[GitHub] Critical Security: A new SSH key was added',
    text_content: 'A new public SSH key was added to your account. If this was not you, please take action.',
    html_content: `
      <div style="background-color: #f6f8fa; padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
        <div style="max-width: 540px; margin: 0 auto; background: white; border: 1px solid #d0d7de; border-radius: 6px;">
          <div style="padding: 24px; background: #24292f; border-top-left-radius: 6px; border-top-right-radius: 6px;">
            <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" style="fill: white;"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
          </div>
          <div style="padding: 32px;">
            <p style="margin: 0; font-size: 14px; color: #1f2328;">Hey <b>cinlodev</b>,</p>
            <h2 style="font-size: 20px; font-weight: 600; margin: 16px 0; color: #1f2328;">A new SSH key was added</h2>
            <p style="color: #656d76; font-size: 14px; line-height: 1.5;">
              A new public SSH key was added to your account from an unrecognized IP address: <b>192.168.1.105</b> (Buenos Aires, AR).
            </p>
            <div style="margin: 24px 0; padding: 16px; background: #fff8c5; border: 1px solid #d4a72c; border-radius: 6px; font-size: 13px; color: #735c0f;">
              If this was you, you can ignore this email. No action is required.
            </div>
            <a href="#" style="display: inline-block; padding: 8px 16px; background: #cf222e; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Review your keys</a>
          </div>
          <div style="padding: 24px; background: #f6f8fa; border-top: 1px solid #d0d7de; text-align: center; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;">
            <p style="margin: 0; font-size: 12px; color: #656d76;">GitHub, Inc. • 88 Colin P. Kelly Jr Street • San Francisco, CA 94107</p>
          </div>
        </div>
      </div>
    `,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: '4',
    from_address: '"Marketing Pro" <news@marketing.com>',
    to_address: 'leads@cinlodev.com',
    subject: 'Wait! Don\'t miss this offer {{discount}}% OFF',
    text_content: 'Get {{discount}}% off your next purchase using code {{promo_code}}.',
    html_content: `
      <div style="background-color: #ff3e00; padding: 40px; text-align: center; font-family: 'Helvetica', sans-serif;">
        <div style="background: white; padding: 40px; border-radius: 50%; width: 400px; height: 400px; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
          <h1 style="color: #ff3e00; font-size: 60px; margin: 0;">{{discount}}%</h1>
          <p style="font-size: 20px; color: #333; margin: 10px 0;">SPECIAL DISCOUNT</p>
          <div style="border: 2px dashed #ff3e00; padding: 10px 20px; font-size: 24px; font-weight: bold; color: #ff3e00; margin-top: 20px;">
            {{promo_code}}
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 20px;">Valid until: {{expiry_date}}</p>
        </div>
      </div>
    `,
    has_attachments: 0,
    status: 'fail', // Multiple variables missing
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
  }
];

export const MOCK_ATTACHMENTS: Record<string, any[]> = {
  '2': [
    { id: 'att-1', filename: 'receipt_apple_MQ88.pdf', size: 85000, content_type: 'application/pdf' },
    { id: 'att-2', filename: 'terms_and_conditions.pdf', size: 1240000, content_type: 'application/pdf' }
  ]
};

