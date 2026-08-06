import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticRoutes = ['', '/search', '/about-us'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now
  }));

  // Shopify-backed routes are optional — site works without store credentials
  if (!process.env.SHOPIFY_STORE_DOMAIN || !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    return staticRoutes;
  }

  try {
    const { getCollections, getPages, getProducts } = await import('@/lib/shopify');

    const [collections, products, pages] = await Promise.all([
      getCollections().catch(() => []),
      getProducts({}).catch(() => []),
      getPages().catch(() => [])
    ]);

    return [
      ...staticRoutes,
      ...collections.map((collection) => ({
        url: `${baseUrl}${collection.path}`,
        lastModified: collection.updatedAt || now
      })),
      ...products.map((product) => ({
        url: `${baseUrl}/product/${product.handle}`,
        lastModified: product.updatedAt || now
      })),
      ...pages.map((page) => ({
        url: `${baseUrl}/${page.handle}`,
        lastModified: page.updatedAt || now
      }))
    ];
  } catch {
    return staticRoutes;
  }
}
