module.exports = {
    siteUrl: 'https://atakankaracali.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 1.0,
    additionalPaths: async (config) => [
      { loc: '/#about', changefreq: 'weekly', priority: 0.9 },
      { loc: '/#experience', changefreq: 'weekly', priority: 0.9 },
      { loc: '/#projects', changefreq: 'weekly', priority: 0.8 },
      { loc: '/#contact', changefreq: 'weekly', priority: 0.7 },
    ],
  };
  