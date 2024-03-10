function FaqSection() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10" id="faq">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  What is Waxchain Token (WAX)?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  WAX is the official token of the Waxchain Token ecosystem, our
                  main Product waxchain.io was established in late 2022 and
                  since then, we have over 100.000 registered users worldwide,
                  WAX will have utilities in our platform and more importantly,
                  all holders will get dividends of waxchain.io in form of
                  buyback and burn events of our token.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  Why Waxchain Token?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  waxchain.io has experienced massive growth over the last few
                  months as online s are getting bigger and more popular by the
                  day. Our main product waxchain.io is already established and
                  we expect this trend to continue and accelerate after
                  implementing more games, as well as starting aggressive
                  marketing.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  When will I get my WAX Tokens?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  <div className="flex flex-col gap-2.5">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="text-sm text-white/50">Claims</div>
                      <div className="text-sm text-white/50 text-center">
                        Percentage
                      </div>
                      <div className="text-sm text-white/50 text-right">
                        Unlock Period
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm text-white">1st claim</div>
                      <div className="text-sm text-white text-center">25%</div>
                      <div className="text-sm text-white text-right">
                        24 hours after Launch
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm text-white">2nd claim</div>
                      <div className="text-sm text-white text-center">25%</div>
                      <div className="text-sm text-white text-right">
                        After 10 days
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm text-white">3rd claim</div>
                      <div className="text-sm text-white text-center">25%</div>
                      <div className="text-sm text-white text-right">
                        After 30 days
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="text-sm text-white">4th claim</div>
                      <div className="text-sm text-white text-center">25%</div>
                      <div className="text-sm text-white text-right">
                        After 45 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  When will Waxchain Token launch?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  waxchain.io has been live since over a year with new updates
                  almost weekly. As for the WAX token, we will launch shortly
                  after the presale ends and all tokens are sold out or the
                  different presale stages end.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  Where will I be able to exchange my WAX Tokens?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  WAX will be listed on centralized exchanges but also
                  decentralized exchanges such as Uniswap, as well as on a own
                  swap platform in which all generated fees go directly to all
                  WAX staking pool contributors, for more information click here
                  (here should redirect to whitepaper)
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xl select-none">
                  What is the WAX Launch price?
                </span>
                <div className="flex flex-shrink-0 rotate-180 !rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0768 11.3679C14.4034 11.0412 14.4034 10.5146 14.0768 10.1879L8.47011 4.58125C8.21011 4.32125 7.79011 4.32125 7.53011 4.58125L1.92344 10.1879C1.59678 10.5146 1.59678 11.0412 1.92344 11.3679C2.25011 11.6946 2.77678 11.6946 3.10344 11.3679L7.99678 6.47458L12.8968 11.3746C13.2234 11.6946 13.7501 11.6946 14.0768 11.3679Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="max-h-[230px] transition-all duration-300">
                <div className="text-sm text-white/50 mt-2.5">
                  The WAX launch price will be $0.15, which means that all
                  presale contributors will get the cheapest possible price
                  before launch, Presale contributors may also be eligible to
                  get a Hype NFT airdrop, click here to learn more (here should
                  redirect to the NFT section of the page)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqSection;
