import Link from 'next/link';
import { getMenu } from '@/lib/shopify';

const Categories = async () => {
  const menu = await getMenu('main-menu');
  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <h3 className="text-[16px] font-semibold text-ink">Navigation</h3>
      <div className="mt-3 flex flex-col items-center gap-2 text-[14px] text-ink/70 md:items-start">
        {menu.map((menuItem, i) => (
          <div key={i} className="flex flex-col items-center gap-2 md:items-start">
            <Link href={menuItem.path} className="hover-line font-medium text-ink">
              {menuItem.title}
            </Link>
            {menuItem.items.map((subMenuItem, j) => (
              <Link href={subMenuItem.path} key={j} className="hover-line ml-0 md:ml-2">
                {subMenuItem.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
