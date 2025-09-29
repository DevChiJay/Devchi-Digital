/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://devchi.me',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority rules
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    else if (path.startsWith('/about')) priority = 0.8;
    else if (path.startsWith('/services')) priority = 0.85;
    else if (path.startsWith('/portfolio')) priority = 0.75;

    return {
      loc: path, // => this will be exported as http(s)://<siteUrl>/<path>
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: []
    };
  },
};
