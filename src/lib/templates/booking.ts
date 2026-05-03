export const bookingTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 0; background-color: #f7f7f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .hero { background: url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80') no-repeat center center; background-size: cover; height: 240px; }
    .content { padding: 32px; }
    .brand { color: #FF5A5F; font-size: 24px; font-weight: 800; margin-bottom: 24px; display: flex; align-items: center; }
    .title { font-size: 28px; font-weight: 700; color: #484848; line-height: 1.2; margin-bottom: 16px; }
    .details-card { background: #f9f9f9; border: 1px solid #ebebeb; border-radius: 12px; padding: 20px; margin: 24px 0; display: flex; }
    .date-box { flex: 1; text-align: center; border-right: 1px solid #ebebeb; }
    .date-box:last-child { border-right: none; }
    .date-label { font-size: 12px; color: #767676; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
    .date-value { font-size: 16px; color: #484848; font-weight: 600; margin-top: 4px; }
    .info-section { margin-top: 32px; border-top: 1px solid #ebebeb; padding-top: 24px; }
    .info-title { font-size: 18px; font-weight: 700; color: #484848; margin-bottom: 12px; }
    .info-text { font-size: 15px; color: #767676; line-height: 1.6; }
    .btn { display: inline-block; background: #FF5A5F; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; margin-top: 24px; }
    .footer { padding: 32px; background: #484848; color: #ffffff; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero"></div>
    <div class="content">
      <div class="brand">airbnb</div>
      <h1 class="title">You're going to {{city}}!</h1>
      <p class="info-text">Your reservation at <strong>{{listing_name}}</strong> is confirmed. Pack your bags!</p>
      
      <div class="details-card">
        <div class="date-box">
          <div class="date-label">Check-in</div>
          <div class="date-value">{{check_in_date}}</div>
        </div>
        <div class="date-box">
          <div class="date-label">Check-out</div>
          <div class="date-value">{{check_out_date}}</div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-title">House Rules</div>
        <p class="info-text">No smoking, no parties, and please be quiet after 10 PM. Your host, {{host_name}}, will meet you at the door.</p>
      </div>

      <a href="#" class="btn">View Reservation</a>
    </div>
    <div class="footer">
      Sent with ♥ from Airbnb HQ<br>
      888 Brannan St, San Francisco, CA 94103
    </div>
  </div>
</body>
</html>
`;
