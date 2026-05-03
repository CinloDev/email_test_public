import { welcomeTemplate } from './templates/welcome';
import { receiptTemplate } from './templates/receipt';
import { securityTemplate } from './templates/security';
import { newsletterTemplate } from './templates/newsletter';
import { bookingTemplate } from './templates/booking';
import { invoiceTemplate } from './templates/invoice';

export const MOCK_EMAILS = [
  {
    id: '1',
    from_address: '"MailQuark HQ 🚀" <no-reply@mailquark.io>',
    to_address: 'dev@cinlodev.com',
    subject: 'Welcome to the Future of Email Testing! 🌟',
    text_content: 'Hi {{name}}!',
    html_content: welcomeTemplate,
    has_attachments: 0,
    status: 'fail',
    created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  },
  {
    id: '2',
    from_address: '"Mug Life Coffee" <news@muglife.coffee>',
    to_address: 'dev@cinlodev.com',
    subject: '☕ Coffee, redefined: Discover our new arrivals',
    text_content: 'Discover our new sustainable coffee blends.',
    html_content: receiptTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
  },
  {
    id: '3',
    from_address: '"MailQuark Payments" <billing@mailquark.io>',
    to_address: 'finance@cinlodev.com',
    subject: 'Payment received: Your transaction was successful',
    text_content: 'Your transaction of $24.00 was successful.',
    html_content: securityTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: '4',
    from_address: '"Newsletter Team" <hello@newsletter.io>',
    to_address: 'leads@cinlodev.com',
    subject: 'Wait! Don\'t miss this offer {{discount}}% OFF',
    text_content: 'Coffee news',
    html_content: newsletterTemplate,
    has_attachments: 0,
    status: 'fail',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
  },
  {
    id: '5',
    from_address: '"Airbnb" <automated@airbnb.com>',
    to_address: 'travel@cinlodev.com',
    subject: 'Reservation confirmed for {{city}}! 🏠',
    text_content: 'Booking confirmation',
    html_content: bookingTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString()
  },
  {
    id: '7',
    from_address: '"System Monitor" <bot@mailquark.io>',
    to_address: 'admin@cinlodev.com',
    subject: 'MailQuark · Activity Report [Last 24h]',
    text_content: 'System summary: 128 emails processed.',
    html_content: invoiceTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  }
];

export const MOCK_ATTACHMENTS: Record<string, any[]> = {
  // Ya no hay adjuntos para el ID 2 porque cambió a newsletter
};