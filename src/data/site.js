// Central site config for the RevenProx project site.
export const ORG = 'dotcommoners';
export const CONTACT = 'contact@dotcommoners.com';
export const GITHUB_ORG = 'https://github.com/dotcommoners';
export const DOCS = 'https://docs.dotcommoners.com/revenprox/';
export const WWW = 'https://www.dotcommoners.com';
export const REPO = 'https://github.com/dotcommoners/revenprox';

export const PROJECTS = [
  {
    slug: 'revenprox', name: 'RevenProx', tag: 'Real-time streaming', lang: 'Zig',
    summary: 'A high-performance, horizontally scalable Server-Sent Events proxy built in Zig.',
    site: 'https://docs.dotcommoners.com/revenprox/', docs: 'https://docs.dotcommoners.com/revenprox/',
    repo: 'https://github.com/dotcommoners/revenprox',
    topics: ['sse', 'proxy', 'distributed-systems', 'zig', 'real-time'],
  },
  {
    slug: 'machineuse', name: 'Machineuse', tag: 'Browser automation', lang: 'Python',
    summary: 'Distributed container management for browser automation at scale.',
    site: 'https://docs.dotcommoners.com/machineuse/', docs: 'https://docs.dotcommoners.com/machineuse/',
    repo: 'https://github.com/dotcommoners/machineuse',
    topics: ['browser-automation', 'distributed-systems', 'containers', 'systemd-nspawn', 'mcp'],
  },
];

// Base-aware internal path helper. base is "/" here, but this keeps links robust.
const B = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p = '') => `${B}/${String(p).replace(/^\//, '')}`.replace(/\/+/g, '/') || '/';

export const NAV = [
  { label: 'Architecture', href: url('architecture') },
  { label: 'Use cases', href: url('use-cases') },
  { label: 'Comparison', href: url('comparison'), sm: true },
  { label: 'FAQ', href: url('faq') },
  { label: 'Docs', href: DOCS, sm: true },
  { label: 'GitHub', href: REPO },
];

// Canonical site origin (matches astro.config `site`).
export const SITE = 'https://revenprox.dotcommoners.com';
const abs = (p = '') => new URL(url(p), SITE).href.replace(/\/$/, '') || SITE;

// ---- Shared JSON-LD builders (accurate to llms.txt; no invented facts) ----

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'dotcommoners',
  url: WWW,
  sameAs: [GITHUB_ORG],
  description: 'Open-source infrastructure for the commons — high-performance, self-hostable systems software.',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RevenProx',
  url: SITE,
  publisher: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
};

const softwareDescription =
  'RevenProx is an open-source, high-performance Server-Sent Events (SSE) proxy built in Zig. It delivers real-time SSE streams to 10M+ concurrent clients across 100+ instances using a brokerless NNG mesh, with JWT authentication, UUID topic-based routing, and a minimal memory footprint. MIT-licensed and self-hostable.';

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RevenProx',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Linux',
  description: softwareDescription,
  url: SITE,
  downloadUrl: REPO,
  codeRepository: REPO,
  programmingLanguage: 'Zig',
  license: 'https://opensource.org/licenses/MIT',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
};

export const sourceCodeSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'RevenProx',
  description: softwareDescription,
  codeRepository: REPO,
  programmingLanguage: 'Zig',
  license: 'https://opensource.org/licenses/MIT',
  author: { '@type': 'Organization', name: 'dotcommoners', url: WWW },
  url: SITE,
};

// Build a BreadcrumbList from [{ label, path }] (path relative to base).
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.label, item: abs(it.path),
  })),
});

// Build an FAQPage from [[question, answer], ...].
export const faqSchema = (pairs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pairs.map(([q, a]) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
