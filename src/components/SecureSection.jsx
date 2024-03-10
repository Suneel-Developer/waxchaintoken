import hypeloot from "../../public/assets/hypeloot-zUVuqhms.svg";
import verified from "../../public/assets/verified-XvofUkFN.png";
import certik from "../../public/assets/certik-O9sGpntS.png";

function SecureSection() {
  return (
    <section className="bg-[#030B15] py-28">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col gap-5 md:gap-10 p-3 md:p-7 ">
        <h2 className="text-center text-3xl font-extrabold uppercase md:text-6xl text-white">
          How to Buy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 md:flex-nowrap">
          <div className="flex flex-col p-5 rounded-2xl bg-[#080531] md:p-7">
            <div className="flex items-center gap-5 mb-5">
              <img src="/1.png" alt="" className="h-12" />
              <img src="/2.png" alt="" className="h-12" />
            </div>
            <h3 className="mb-2.5 text-xl font-semibold">
              Step 1: Connect your Wallet
            </h3>
            <p className="text-sm font-medium text-white/50">
              Switch to BNB nEtwork and press the connect button to choose one
              of the many supported wallets to connect to the website.
            </p>
          </div>
          <div className="flex flex-col p-5 rounded-2xl bg-[#080531] md:p-7">
          <div className="flex items-center gap-5 mb-5">
              <img src="/3.png" alt="" className="h-12" />
              <img src="/4.png" alt="" className="h-12" />
            </div>
            <h3 className="mb-2.5 text-xl font-semibold">
            Step 2: Buy with BNB, BUSD or USDT
            </h3>
            <p className="text-sm font-medium text-white/50">
              You must use BNB, BUSD or USDT to purchase WAX tokens in this
              presale.
            </p>
          </div>
          <div className="flex flex-col p-5 rounded-2xl bg-[#080531] md:p-7">
          <div className="flex items-center gap-5 mb-5">
              <img src="/5.png" alt="" className="h-12" />
            </div>
            <h3 className="mb-2.5 text-xl font-semibold">
            Step 3: Claim Your Tokens
            </h3>
            <p className="text-sm font-medium text-white/50">
              Once the pre-sale is completed, the 45 days of blocking will begin
              so that you can then, at the end, redeem your Tokens using the
              button
              <b> “Claim your Tokens”</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureSection;
