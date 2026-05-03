export const welcomeTemplate = `
  <div style="background:#0b0f19;padding:40px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;">
    <table width="100%" style="max-width:620px;margin:0 auto;background:#111827;border-radius:16px;border:1px solid #1f2937;overflow:hidden;">
      
      <!-- HEADER -->
      <tr>
        <td style="background:#6366f1;color:#ffffff;padding:22px;text-align:center;font-size:20px;font-weight:700;">
          MailQuark
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:30px;">
          
          <h2 style="margin:0 0 10px;color:#f9fafb;font-size:22px;">
            Welcome, {{name}} 🚀
          </h2>

          <p style="margin:0 0 18px;color:#9ca3af;font-size:14px;line-height:1.7;">
            You now have a controlled environment to intercept, inspect and validate emails before they reach production.
          </p>

          <!-- CARD -->
          <table width="100%" style="margin:22px 0;background:#0f172a;border:1px solid #1f2937;border-radius:10px;">
            <tr>
              <td style="padding:18px;">
                <span style="font-size:11px;font-weight:700;color:#818cf8;letter-spacing:0.5px;">
                  QUICK START
                </span>

                <ul style="margin:10px 0 0;padding-left:18px;font-size:13px;color:#e5e7eb;line-height:1.8;">
                  <li>SMTP → localhost:1025</li>
                  <li>Send a test email</li>
                  <li>Detect broken variables</li>
                </ul>
              </td>
            </tr>
          </table>

          <!-- CTA -->
          <div style="text-align:center;margin-top:20px;">
            <a href="https://mailquark.io/docs"
              style="background:#6366f1;color:#ffffff;padding:12px 22px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;">
              Open Dashboard
            </a>
          </div>

          <!-- FOOTER -->
          <p style="margin-top:26px;font-size:12px;color:#6b7280;text-align:center;">
            MailQuark · Automated system message
          </p>

        </td>
      </tr>

    </table>
  </div>
`;
