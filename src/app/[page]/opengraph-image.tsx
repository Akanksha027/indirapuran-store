import OpengraphImage from '@/components/common/opengraph-image';
import { getPage } from '@/lib/shopify';

export const runtime = 'edge';

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page?.seo?.title || page?.title || process.env.SITE_NAME || 'Riwaaz Indirapuram';

  return await OpengraphImage({ title });
}
