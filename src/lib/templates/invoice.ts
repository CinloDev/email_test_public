export const invoiceTemplate = `
<!DOCTYPE html>
<html style="height:100%; margin:0;">
<body style="margin:0; background:#DFF1F1; font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif; min-height:100%;">

<table width="100%" style="padding:40px 0; min-height:100vh;">
<tr><td style="vertical-align:top;">

<table width="100%" style="max-width:620px; margin:0 auto; background:#ffffff; border-radius:16px; border:1px solid #e2e8f0; overflow:hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

<tr>
<td style="padding:24px; background:#f1f5f9; color:#0f172a; font-weight:700;">
MailQuark · Activity Report
</td>
</tr>

<tr>
<td style="padding:30px;">

<h2 style="color:#0f172a; margin:0 0 10px; font-size:20px;">System summary</h2>

<p style="color:#475569; font-size:14px;">
Last 24h email validation results:
</p>

<table width="100%" style="margin-top:20px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px;">
<tr>
<td style="padding:16px; color:#475569;">Emails processed</td>
<td align="right" style="padding:16px; color:#0f172a; font-weight:700;">128</td>
</tr>
<tr>
<td style="padding:16px; color:#475569;">Failures detected</td>
<td align="right" style="padding:16px; color:#dc2626; font-weight:700;">12</td>
</tr>
<tr>
<td style="padding:16px; color:#475569;">Success rate</td>
<td align="right" style="padding:16px; color:#16a34a; font-weight:700;">90.6%</td>
</tr>
</table>

<div style="text-align:center; margin-top:24px;">
<a href="#" style="background:#4f46e5; color:#fff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:700; font-size:14px;">
View full report
</a>
</div>

</td>
</tr>

</table>

</td></tr>
</table>

</body>
</html>
`;
