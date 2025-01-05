/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.joanboix.dev', // Replace with your site's URL
  generateRobotsTxt: true,           // Generates robots.txt automatically
  sitemapSize: 5000,                 // Split sitemap if it exceeds 5000 entries (optional)
  changefreq: 'daily',               // Change frequency for the pages (optional)
  priority: 0.7,                     // Default priority for pages (optional)
};

module.exports = config;