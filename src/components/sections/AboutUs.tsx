const AboutUs = () => {
  return (
    <section className="border-t border-black/5 bg-blush px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="sr-only">About us</h2>
        <h3 className="font-playfair text-[clamp(28px,5vw,40px)] font-semibold text-ink">
          Garments for ladies, kids &amp; gents
        </h3>
        <p className="mt-5 font-jost text-[15px] leading-relaxed text-ink/70 md:text-[17px]">
          Riwaaz Indirapuram brings everyday fashion and festive wear under one roof — curated
          collections for the whole family, right here in Indirapuram.
        </p>
        <p className="mt-4 text-[14px] text-ink/60">
          Store timing: 11:00 AM – 9:30 PM · Tuesday closed
          <br />
          WhatsApp:{' '}
          <a href="https://wa.me/918368681818" className="font-medium text-ink underline">
            8368681818
          </a>
        </p>
        <a href="https://wa.me/918368681818" className="btn mt-8">
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
