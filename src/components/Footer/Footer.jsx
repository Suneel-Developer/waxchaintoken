/* eslint-disable react/no-unescaped-entities */

function Footer() {
  return (
    <section className="bg-[#030B15] p-3 md:p-7">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="border-y border-[#FFFFFF0F] py-20 grid grid-cols-1 md:grid-cols-2 base:grid-cols-4 gap-5">
          <div>
            <img src="/wax-lgoo-small.png" alt="wax" className="w-[60px] h-[40px] mb-10" />
            <p className="text-[#A4B4C3] leading-[1.75] text-base my-4">
              Discover the innovation that will redefine the global
              cryptographic landscape. The world of Blockchain renewing and
              changing lives.
            </p>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">USEFUL LINKS</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[#A4B4C3] leading-[1.75] text-base cursor-pointer hover:text-white transition duration-200">Terms and conditions</li>
              <li className="text-[#A4B4C3] leading-[1.75] text-base cursor-pointer hover:text-white transition duration-200">Privacy policy</li>
              <li className="text-[#A4B4C3] leading-[1.75] text-base cursor-pointer hover:text-white transition duration-200">Our Blockchain Contract</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-4">CONTACT</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[#A4B4C3] leading-[1.75] text-base flex items-center gap-3 cursor-pointer hover:text-white transition duration-200">
                <img src="/telegram1.svg" alt="telegram" className="h-4" />
                Telegram Official Channel
              </li>
              <li className="text-[#A4B4C3] leading-[1.75] text-base flex items-center gap-3 cursor-pointer hover:text-white transition duration-200">
                <img src="/twitter.svg" alt="twitter" className="h-4" />
                Twitter
              </li>
              <li className="text-[#A4B4C3] leading-[1.75] text-base flex items-center gap-3 cursor-pointer hover:text-white transition duration-200">
                <img src="/discord.svg" alt="discord" className="h-4" />
                Discord´s Server
              </li>
              <li className="text-[#A4B4C3] leading-[1.75] text-base flex items-center gap-3 cursor-pointer hover:text-white transition duration-200">
                <img src="/instagram.svg" alt="instagram" className="h-4" />
                Instagram
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-4">SUBSCRIBE NEWSLETTER</h2>
            <p className="text-[#A4B4C3] leading-[1.75] text-base mb-7">
              Subscribe to our newsletter for latest updates about the project.
            </p>
            <div className="bg-[#7676821A] rounded-[10px] text-base border border-[#69727d] h-10 overflow-hidden flex justify-between">
              <input type="text" className=" bg-transparent border-none outline-none flex-1 px-3 h-full" />
              <div className="bg-[#00C4F4] w-16 flex justify-center items-center cursor-pointer">
                <img src="/telegram.svg" alt="telegram" />
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-5  items-center mt-6">
          <h2 className="text-sm font-semibold text-white">DISCLAIMER</h2>
          <p className="text-[#A4B4C3] text-xs text-center">
            Please review this legal disclaimer carefully. Seek professional
            advice for any doubt. The information provided is not exhaustive and
            doesn’t constitute part of a contractual agreement. While we strive
            for accuracy, the information, services, and timelines are subject
            to change without notice. This disclaimer doesn’t obligate anyone to
            enter a contract or binding commitment. By using this information,
            you acknowledge that it doesn’t contravene applicable laws,
            regulatory requirements, or regulations.Disclaimer: Cryptocurrency
            may be unregulated in your jurisdiction. The value of
            cryptocurrencies may fluctuate. Profits may be subject to capital
            gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="text-[#A4B4C3] text-xs text-center mt-3">© 2024 WaxChain. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
