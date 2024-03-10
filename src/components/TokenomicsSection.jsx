import chartMobile from "../../public/assets/chart-mobile-l7l6S6fl.svg";
import charDesktop from "../../public/assets/chart-desktop-Xm7aODpH.svg";
import paymentMobile from "../../public/assets/payment-mobile-6E6h4qlU.png";
import paymentDesktop from "../../public/assets/payment-desktop-cwLhB_59.svg";

function TokenomicsSection() {
  return (
    <>
      <div className="flex flex-col gap-5" id="tokenomics">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            Waxchain Token Tokenomics
          </h3>
          <p className="text-white/50 text-xl font-medium text-center">
            Total supply to
            <span className="whitespace-nowrap">1,000,000,000</span>
          </p>
        </div>
        <div className="flex md:mt-10 pointer-events-none">
          <img src={chartMobile} className="md:hidden w-full" />
          <img src={charDesktop} className="hidden md:block w-full" />
        </div>
        <div className="flex mt-10 overflow-hidden pointer-events-none">
          <img src={paymentMobile} className="md:hidden w-full" />
          <img src={paymentDesktop} className="hidden md:block w-full" />
        </div>
      </div>
    </>
  );
}

export default TokenomicsSection;
