import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  { navCap: 'Home' },
  {
    displayName: 'Dashboard',
    iconName: 'solar:home-2-line-duotone',
    route: '/dashboard',
  },
  {
    displayName: 'Analytics',
    iconName: 'solar:chart-line-duotone',
    route: '#',
  },
  { divider: true, navCap: 'Brand' },
  {
    displayName: 'API Key',
    iconName: 'solar:key-minimalistic-2-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'API Key',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'API Documentation',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Brand Manager',
    iconName: 'solar:layers-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'My Brands',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Upload Assets',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Brand Kit Export',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Brand Guidelines Generator',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Brand Protection Alerts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Brand Intelligence',
    iconName: 'solar:shield-check-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Legal Info',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Revenue Estimates',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Employees',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Hosting',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Public Filings',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Company Contacts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Insights & Reports',
    iconName: 'solar:graph-up-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Brand Trends',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Industry Highlights',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Sentiment & News',
    iconName: 'solar:chat-round-line-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Social Sentiment Score',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Latest News Mentions',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Wikipedia Summary',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Data Aggregation Log',
    iconName: 'solar:list-check-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Source Breakdown',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Confidence Score',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Last Enrichment Timestamp',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Manual Re-enrich Button',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'Technology Stack',
    iconName: 'solar:cpu-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'CMS',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Frameworks',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Hosting',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'SSL',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'DNS/CDN',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  { divider: true, navCap: 'AI' },
  {
    displayName: 'AI Tools',
    iconName: 'solar:robot-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Brand Summary Generator',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Competitor Comparison',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Consistency Checker',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Logo/Color AI Suggestions',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  { divider: true, navCap: 'Account' },
  {
    displayName: 'Support',
    iconName: 'solar:lifebuoy-line-duotone',
    route: '#',
    children: [
      {
        displayName: 'Help Center',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
      {
        displayName: 'Submit Ticket',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
      },
    ],
  },
  {
    displayName: 'My Account',
    iconName: 'solar:user-circle-line-duotone',
    route: '#',
  },
];
