const Disclaimer = async () => {
  return (
    <div className="flex max-w-full flex-col items-center md:items-start">
      <h3 className="text-[16px] font-semibold text-ink">More Information</h3>
      <ul className="mt-3 space-y-2 text-center text-[14px] text-ink/70 md:text-left">
        <li>
          <a href="/search" className="hover:text-ink">
            Search
          </a>
        </li>
        <li>
          <a href="https://wa.me/918368681818" className="hover:text-ink">
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/riwaazindirapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Instagram
          </a>
        </li>
      </ul>
      <p className="mt-6 text-center text-[13px] leading-relaxed text-ink/60 md:text-left">
        Riwaaz Indirapuram — garments for ladies, kids &amp; gents.
        <br />
        Open 11:00 AM – 9:30 PM · Tuesday closed.
        <br />
        WhatsApp:{' '}
        <a href="https://wa.me/918368681818" className="font-medium text-ink underline">
          8368681818
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;
