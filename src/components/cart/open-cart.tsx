// next
import Image from 'next/image';

export default function OpenCart({ quantity }: { quantity?: number }) {
  return (
    <div className="relative">
      <Image src="/images/cart.png" width="36" height="36" alt="cart" />
      {quantity ? (
        <div
          className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-medium text-white"
          role="figure"
        >
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
