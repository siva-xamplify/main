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
    route: '/dashboard',
  },
  { divider: true, navCap: 'Brand' },
  {
    displayName: 'API Key',
    iconName: 'solar:key-minimalistic-2-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'API Key',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'API Documentation',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Brand Manager',
    iconName: 'solar:layers-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'My Brands',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Upload Assets',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Brand Kit Export',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Brand Guidelines Generator',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Brand Protection Alerts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Brand Intelligence',
    iconName: 'solar:shield-check-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Legal Info',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Revenue Estimates',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Employees',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Hosting',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Public Filings',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Company Contacts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Insights & Reports',
    iconName: 'solar:graph-up-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Brand Trends',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Industry Highlights',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Sentiment & News',
    iconName: 'solar:chat-round-line-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Social Sentiment Score',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Latest News Mentions',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Wikipedia Summary',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Data Aggregation Log',
    iconName: 'solar:list-check-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Source Breakdown',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Confidence Score',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Last Enrichment Timestamp',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Manual Re-enrich Button',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'Technology Stack',
    iconName: 'solar:cpu-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'CMS',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Frameworks',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Hosting',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'SSL',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'DNS/CDN',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  { divider: true, navCap: 'AI' },
  {
    displayName: 'AI Tools',
    iconName: 'solar:robot-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Brand Summary Generator',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Competitor Comparison',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Consistency Checker',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Logo/Color AI Suggestions',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  { divider: true, navCap: 'Account' },
  {
    displayName: 'Support',
    iconName: 'solar:lifebuoy-line-duotone',
    route: '/dashboard',
    children: [
      {
        displayName: 'Help Center',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
      {
        displayName: 'Submit Ticket',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/dashboard',
      },
    ],
  },
  {
    displayName: 'My Account',
    iconName: 'solar:user-circle-line-duotone',
    route: '/dashboard',
  },
];
