export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://printkeyz.vercel.app/sitemap.xml',
  }
}
