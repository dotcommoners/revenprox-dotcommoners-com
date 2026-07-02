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

export const NAV = [
  { label: 'dotcommoners', href: WWW },
  { label: 'Docs', href: DOCS },
  { label: 'GitHub', href: REPO },
];
