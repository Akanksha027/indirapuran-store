import Image from 'next/image';
import Link from 'next/link';
import socialMediaItems from '@/data/social-media.json';

const SocialMedia = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <h3 className="text-[16px] font-semibold text-ink">Follow us</h3>
      <div className="flex items-center justify-center gap-4">
        {socialMediaItems.map((socialMediaItem, i) => (
          <Link
            href={socialMediaItem.url}
            key={i}
            target="_blank"
            title={socialMediaItem.title}
            className="opacity-80 transition hover:opacity-100"
          >
            <Image src={socialMediaItem.image} alt={socialMediaItem.title} width="28" height="28" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
