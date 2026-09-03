var DEFAULT_AFFILIATE = {
  ref: 'YOUR_REF_CODE',
  aff: 'YOUR_AFF_ID',
  utmSource: 'niche-money-hub',
  utmMedium: 'affiliate',
  utmCampaign: 'directory',
  amazonTag: 'YOURTAG-20',
  amazonLinkCode: 'll1',
  bookingAid: 'YOUR_BOOKING_AID',
  defaultNetwork: 'generic'
};

var NICHES = [
  {
    id: 'code',
    name: 'AI code',
    icon: '\u2328\uFE0F',
    focus: true,
    pitch: 'A free AI helper that writes code with you.',
    color: '#22d3ee',
    primaryCta: {
      label: 'Open free AI coder \u2192',
      baseUrl: 'code.html',
      partner: 'DealDoor OpenCode Guide',
      network: 'internal'
    },
    partners: [
      {
        name: 'Try OpenCode',
        baseUrl: 'https://opencode.ai/go?ref=P09GVJ0ANH',
        blurb: 'Free AI coder',
        network: 'direct'
      }
    ]
  },
  {
    id: 'crypto',
    name: 'Crypto tax',
    icon: '\uD83E\uDE99',
    pitch: 'Turn messy coin trades into a tax report.',
    color: '#f59e0b',
    primaryCta: {
      label: 'Open crypto tax guide \u2192',
      baseUrl: 'crypto-tax.html',
      partner: 'DealDoor Koinly Guide',
      network: 'internal'
    },
    partners: [
      {
        name: 'Try Koinly',
        baseUrl: 'https://koinly.io/?via=62C62C62&utm_source=dealdoor&utm_medium=affiliate&utm_campaign=crypto-tax',
        blurb: 'Start a tax report',
        network: 'direct'
      }
    ]
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '\uD83E\uDDE1',
    pitch: 'Free CRM. Grow a business.',
    color: '#ff5c35',
    primaryCta: {
      label: 'Open HubSpot guide \u2192',
      baseUrl: 'hubspot.html',
      partner: 'DealDoor HubSpot Guide',
      network: 'internal'
    },
    partners: []
  },
  {
    id: 'health',
    name: 'Health',
    icon: '\uD83D\uDCAA',
    pitch: 'Isometrics. Budget wellness.',
    color: '#22c55e',
    primaryCta: {
      label: 'Open free health guide \u2192',
      baseUrl: 'health.html',
      partner: 'DealDoor Health Guide',
      network: 'internal'
    },
    partners: []
  },
  {
    id: 'tech',
    name: 'Tech',
    icon: '\uD83D\uDCF1',
    pitch: 'Budget picks. Earbuds. Laptops.',
    color: '#3b82f6',
    primaryCta: {
      label: 'Open tech guide \u2192',
      baseUrl: 'tech.html',
      partner: 'DealDoor Tech Guide',
      network: 'internal'
    },
    partners: []
  }
];

var FEATURED_PARTNER = {
  title: 'This one already pays',
  name: 'Free AI coder (OpenCode)',
  pitch: 'Tap. Try the free AI coding helper.',
  baseUrl: 'code.html',
  ctaLabel: 'Open the AI coder guide \u2192',
  badge: 'Live money link',
  network: 'internal'
};

var LEAD_CAPTURE = {
  headline: 'Want free deal alerts?',
  subhead: 'We email good deals. Free. Easy to stop anytime.',
  buttonLabel: 'Send me deals',
  privacyNote: 'No spam. You can leave the list any time.'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NICHES: NICHES,
    DEFAULT_AFFILIATE: DEFAULT_AFFILIATE,
    FEATURED_PARTNER: FEATURED_PARTNER,
    LEAD_CAPTURE: LEAD_CAPTURE
  };
}
