function TokenDetailsSection() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-2.5 md:gap-5">
          <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
            TOKEN DETAILS
          </h3>
          <p className="font-medium text-white/50 text-center text-sm md:text-base">
            Use the contract information below to add the
            <span className="text-gold">WAX</span> token to your wallet.
          </p>
        </div>
        <div className="flex flex-col rounded-3xl bg-[#332A6A] p-5 md:p-7 md:flex-row">
          <div className="flex flex-wrap border-b md:border-b-0 md:border-r border-white/10 md:mr-10">
            <div className="flex flex-col gap-1 w-1/2">
              <span className="text-white/50 text-sm md:text-base">
                Token Name{" "}
              </span>
              <span className="text-sm md:text-base"> Waxchain TOKEN </span>
            </div>
            <div className="flex flex-col gap-1 mb-5 w-1/2">
              <span className="text-white/50 text-sm md:text-base">
                Token Type{" "}
              </span>
              <span className="text-sm md:text-base">
                BEP20 (Binance Chain)
              </span>
            </div>
            <div className="flex flex-col gap-1 mb-5 w-1/2">
              <span className="text-white/50 text-sm md:text-base">
                Token Symbol{" "}
              </span>
              <span className="text-sm md:text-base">EXOT</span>
            </div>
            <div className="flex flex-col gap-1 mb-5 w-1/2">
              <span className="text-white/50 text-sm md:text-base">
                Decimal{" "}
              </span>
              <span className="text-sm md:text-base">18</span>
            </div>
            <div className="flex flex-col gap-1 mb-5 w-full">
              <span className="text-white/50 text-sm md:text-base">
                Token Contract Address{" "}
              </span>
              <a
                href="https://etherscan.io/token/0x652db4E10b6e7B32933D351eccbe9C28236A1DD7"
                target="_blank"
                className="text-sm md:text-base truncate"
              >
                0x652db4E10b6e7B32933D351eccbe9C28236A1DD7
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="font-bold italic uppercase">Pre-sale Details</div>
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-1 w-full">
                <span className="text-white/50 text-sm md:text-base">
                  Token sold during the Pre-sale{" "}
                </span>
                <span className="text-sm md:text-base"> 40,000,000 </span>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-white/50 text-sm md:text-base">
                  Current Stage Price{" "}
                </span>
                <span className="text-sm md:text-base">1 WAX = $0.01</span>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-white/50 text-sm md:text-base">
                  Exchange Listing Price{" "}
                </span>
                <span className="text-sm md:text-base">1 WAX = $0.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TokenDetailsSection;
