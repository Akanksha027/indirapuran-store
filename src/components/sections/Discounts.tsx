// react-fast-marquee
import Marquee from 'react-fast-marquee';

const Discounts = () => {
  return (
    <div className="bg-veryDarkPurple px-[4px] py-[3px] font-medium text-white md:px-[8px] md:py-[6px] md:text-[18px]">
      <Marquee autoFill={true}>
        <div className="ml-[32px] flex items-center justify-center gap-[32px]">
          <p>Riwaaz Indirapuram · Ladies · Kids · Gents · Open 11:00 AM – 9:30 PM · Tuesday closed</p>
          <div className="aspect-square w-[8px] rounded-full bg-gold" />
        </div>
        <div className="ml-[32px] flex items-center justify-center gap-[32px]">
          <p>
            Order on WhatsApp:{' '}
            <span className="text-gold">8368681818</span>
          </p>
          <div className="aspect-square w-[8px] rounded-full bg-gold" />
        </div>
      </Marquee>
    </div>
  );
};

export default Discounts;
