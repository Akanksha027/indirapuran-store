import Categories from './Categories';
import CopyRight from './CopyRight';
import Disclaimer from './Disclaimer';
import PaymentMethods from './PaymentMethods';
import SocialMedia from './SocialMedia';

const index = () => {
  return (
    <footer className="border-t border-black/10 bg-white px-4 py-12 md:px-8 md:py-16">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
        <Categories />
        <div className="flex flex-col items-center gap-6 text-center">
          <SocialMedia />
          <div className="w-full max-w-sm">
            <h3 className="text-[16px] font-semibold text-ink">Subscribe to our emails</h3>
            <form
              className="mt-3 flex border border-ink"
              action="https://wa.me/918368681818"
              method="get"
            >
              <input
                type="email"
                name="text"
                placeholder="Email"
                className="w-full px-3 py-2.5 text-[14px] outline-none"
                aria-label="Email"
              />
              <button type="submit" className="bg-ink px-4 text-[13px] font-medium text-white">
                Join
              </button>
            </form>
          </div>
          <CopyRight />
          <PaymentMethods />
        </div>
        <Disclaimer />
      </div>
    </footer>
  );
};

export default index;
