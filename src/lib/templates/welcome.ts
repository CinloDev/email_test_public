export const welcomeTemplate = `
<!DOCTYPE html>
<html style="height:100%; margin:0;">
<body style="margin:0; padding:0; background:#DFF1F1; font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif; min-height:100%;">
  <div style="background:#DFF1F1; padding:40px; min-height:100vh;">
    <table width="100%" style="max-width:620px; margin:0 auto; background:#ffffff; border-radius:16px; border:1px solid #e5e7eb; overflow:hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      
      <!-- HEADER -->
      <tr>
        <td style="background:#4f46e5; color:#ffffff; padding:22px; text-align:center; font-size:20px; font-weight:700;">
          MailQuark
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:30px;">
          
          <h2 style="margin:0 0 10px; color:#111827; font-size:22px;">
            Welcome, {{name}} 🚀
          </h2>

          <p style="margin:0 0 18px; color:#4b5563; font-size:14px; line-height:1.7;">
            You now have a controlled environment to intercept, inspect and validate emails before they reach production.
          </p>

          <!-- CARD -->
          <table width="100%" style="margin:22px 0; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px;">
            <tr>
              <td style="padding:18px;">
                <span style="font-size:11px; font-weight:700; color:#4f46e5; letter-spacing:0.5px;">
                  QUICK START
                </span>

                <ul style="margin:10px 0 0; padding-left:18px; font-size:13px; color:#374151; line-height:1.8;">
                  <li>SMTP → localhost:1025</li>
                  <li>Send a test email</li>
                  <li>Detect broken variables</li>
                </ul>
              </td>
            </tr>
          </table>

          <!-- CTA -->
          <div style="text-align:center; margin-top:20px;">
            <a href="https://mailquark.io/docs"
              style="background:#4f46e5; color:#ffffff; padding:12px 22px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:700;">
              Open Dashboard
            </a>
          </div>

          <!-- FOOTER -->
          <p style="margin-top:26px; font-size:12px; color:#9ca3af; text-align:center;">
            MailQuark · Automated system message
          </p>

        </td>
      </tr>

    </table>
  </div>
</body>
</html>
`;
