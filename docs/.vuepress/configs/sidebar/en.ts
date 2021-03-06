import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/dns/': [
    {
      text: 'DNS',
      children: [
        '/dns/README.md',
        '/dns/doh.md',
        '/dns/coredns.md',
      ],
    },
  ],
  '/alb/': [
    {
      text: 'nginx',
      children: [
        '/alb/nginx.md',
      ],
    },
    {
      text: 'caddy',
      children: [
        '/alb/caddy.md',
      ],
    },
    {
      text: 'tools',
      children: [
        '/alb/certbot.md',
        '/alb/traffic-replay.md',
      ],
    },
  ],
  '/waf/': [
    {
      text: 'waf',
      collapsible: false,
      children: [
        '/waf/README.md',
        '/waf/cybersecurity.md',
        '/waf/anti-bot.md',
        '/waf/anti-cc.md',
        '/waf/anti-crawler.md',
      ],
    },
    {
      text: 'tools',
      children: [
        '/waf/tcp-fingerprint.md',
        '/waf/tls-fingerprint.md',
        '/waf/http2-fingerprint.md',
      ],
    },
    {
      text: 'strategy',
      children: [
        '/waf/strategy.md',
      ],
    }
  ],
  '/replay/': [
    {
      text: 'Traffic Replay',
      children: [
        '/replay/README.md',
        '/replay/tcp.md',
        '/replay/udp.md',
        '/replay/http.md',
      ]
    }
  ]
}
