export const invoiceTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', system-ui, sans-serif; color: #111827; }
    .container { max-width: 600px; margin: 40px auto; padding: 40px; border: 1px solid #f3f4f6; border-radius: 16px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 48px; }
    .logo { background: #4f46e5; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 20px; }
    .invoice-id { text-align: right; }
    .invoice-id div { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }
    .invoice-id strong { font-size: 14px; color: #111827; }
    .h1 { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
    .status { display: inline-block; background: #dcfce7; color: #166534; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 99px; margin-bottom: 32px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
    th { text-align: left; font-size: 12px; color: #6b7280; text-transform: uppercase; padding-bottom: 12px; border-bottom: 1px solid #f3f4f6; }
    td { padding: 16px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
    .total-row td { border-bottom: none; padding-top: 24px; font-size: 18px; font-weight: 700; }
    .btn { display: block; background: #111827; color: #ffffff; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
    .footer { margin-top: 48px; font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
        <div class="logo">N</div>
        <div class="invoice-id">
            <div>Invoice #</div>
            <strong>INV-2026-001</strong>
        </div>
    </div>

    <h1 class="h1">Payment Received</h1>
    <div class="status">Paid</div>

    <p style="font-size: 14px; color: #4b5563; margin-bottom: 32px;">Hi {{name}}, thanks for your payment. Your subscription for <strong>Team Plan</strong> has been renewed.</p>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th style="text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Team Plan (Monthly) — 5 Seats</td>
          <td style="text-align: right;">$49.00</td>
        </tr>
        <tr>
          <td>Advanced Security Add-on</td>
          <td style="text-align: right;">$10.00</td>
        </tr>
        <tr class="total-row">
          <td>Total</td>
          <td style="text-align: right;">$59.00</td>
        </tr>
      </tbody>
    </table>

    <a href="#" class="btn">Download PDF Receipt</a>

    <div class="footer">
      Questions? Reply to this email or visit our help center.<br>
      Notion Labs Inc. • 2300 Harrison St, San Francisco, CA
    </div>
  </div>
</body>
</html>
`;
