// next
import Image from 'next/image';

// clsx
import clsx from 'clsx';

const Logo = ({
  size,
  className,
  withWordmark = true,
  theme = 'dark'
}: {
  size: 'sm' | 'lg';
  className?: string;
  withWordmark?: boolean;
  theme?: 'dark' | 'light';
}) => {
  const isLight = theme === 'light';

  return (
    <span
      className={clsx('inline-flex items-center gap-2.5', className, {
        'gap-2': size === 'sm',
        'gap-3': size === 'lg'
      })}
    >
      <Image
        src="/images/logo.png"
        width={512}
        height={512}
        sizes={size === 'sm' ? '48px' : '88px'}
        className={clsx('rounded-full object-cover', {
          'h-10 w-10 md:h-12 md:w-12': size === 'sm',
          'h-16 w-16 md:h-20 md:w-20': size === 'lg'
        })}
        alt="Riwaaz Indirapuram"
        priority
      />
      {withWordmark ? (
        <span className="flex flex-col items-start leading-none">
          <span
            className={clsx('font-playfair font-bold tracking-[0.04em]', {
              'text-[18px] md:text-[22px]': size === 'sm',
              'text-[28px] md:text-[36px]': size === 'lg',
              'text-white': isLight,
              'text-ink': !isLight
            })}
          >
            Riwaaz
          </span>
          <span
            className={clsx('font-jost font-medium uppercase tracking-[0.28em] text-gold', {
              'text-[8px] md:text-[9px]': size === 'sm',
              'text-[10px] md:text-[11px]': size === 'lg'
            })}
          >
            Indirapuram
          </span>
        </span>
      ) : null}
    </span>
  );
};

export default Logo;
