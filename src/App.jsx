import "./App.css";

import CustomGamesSection from "./components/CustomGamesSection";
import FaqSection from "./components/FaqSection";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HowToBuyGuideSection from "./components/HowToBuyGuideSection";
import MeetAdvisorsSection from "./components/MeetAdvisorsSection";
import PoweredBySection from "./components/PoweredBySection";
import PressMediaSection from "./components/PressMediaSection";
import RoadMap from "./components/RoadMap";
import SecureSection from "./components/SecureSection";
import TokenDetailsSection from "./components/TokenDetailsSection";
import TokenomicsSection from "./components/TokenomicsSection";
// import "./i18n.js"

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
 
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "8c35916a47174f4063bbc4b6fee550e5";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://rpc.sepolia.org",
  rpcUrl: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
};

const bsc = {
  chainId: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc.drpc.org",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [bsc],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <>
      <div id="app" className="app">
        <div id="app" data-v-app="">
          {/* <div className="relative flex flex-col gap-5 md:gap-12 p-3 md:p-7 max-w-[1300px] max-h-[100vh] mx-auto h-[100vh]"> */}
          <div className="relative flex flex-col max-h-[100vh] mx-auto h-[100vh]">
            {/* <LanguageSwitcher /> */}
            <Header />
            <div className="relative flex flex-col z-10">
              <CustomGamesSection />
              <SecureSection />
              {/* <RoadMap />/ */}
              {/* <HowToBuyGuideSection /> */}
              {/* <TokenDetailsSection />
              <TokenomicsSection />
              <MeetAdvisorsSection />
              <PressMediaSection />
              <PoweredBySection />
            <FeaturedSection /> */}
            {/* <FaqSection /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
