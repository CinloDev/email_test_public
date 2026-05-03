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
    from_address: '"Apple Billing" <no-reply@apple.com>',
    to_address: 'finance@cinlodev.com',
    subject: 'Your receipt from Apple for Order #MQ-88229',
    text_content: 'Receipt',
    html_content: receiptTemplate,
    has_attachments: 1,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
  },
  {
    id: '3',
    from_address: '"Security Team" <security@github.com>',
    to_address: 'admin@cinlodev.com',
    subject: '[GitHub] Critical Security: A new SSH key was added',
    text_content: 'Security alert',
    html_content: securityTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: '4',
    from_address: '"Mug Life Coffee" <mug@muglife.coffee>',
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
    from_address: '"Notion Billing" <billing@notion.so>',
    to_address: 'finance@cinlodev.com',
    subject: 'Invoice Paid: Thank you for your subscription 📄',
    text_content: 'Subscription invoice',
    html_content: invoiceTemplate,
    has_attachments: 0,
    status: 'pass',
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  }
];

export const MOCK_ATTACHMENTS: Record<string, any[]> = {
  '2': [
    { id: 'att-1', filename: 'receipt_apple_MQ88.pdf', size: 85000, content_type: 'application/pdf' },
    { id: 'att-2', filename: 'terms_and_conditions.pdf', size: 1240000, content_type: 'application/pdf' }
  ]
};