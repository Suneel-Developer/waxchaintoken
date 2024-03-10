"use client";
import { useState, useEffect } from "react";
import chart from "../../public/assets/chart-lZ3yCY_z.svg";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import useContract from "../hooks/useContracts";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { PER_DOLLAR_PRICE, PER_USDT_TO_BNB } from "../contracts/contract";
import logo from "../images/wax-lgoo-small.png";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function CustomGamesSection() {
  const [paymentType, setPaymentType] = useState("BSC");
  const [amount, setAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  let [color] = useState("#ffffff");
  const [stat, setStat] = useState({});
  const { open } = useWeb3Modal();

  const { isConnected } = useWeb3ModalAccount();
  const { buy, getData } = useContract();

  useEffect(() => {
    const _getData = async () => {
      const _data = await getData();
      console.log("data", _data);
      setStat(_data);
    };
    if (isConnected) {
      _getData();
    }
  }, [isConnected]);

  useEffect(() => {
    if (paymentType === "BSC") {
      setReceivedAmount(amount * PER_DOLLAR_PRICE * PER_USDT_TO_BNB);
    } else if (paymentType === "USDT") {
      setReceivedAmount(Number(amount * PER_DOLLAR_PRICE));
    } else if (paymentType === "USDC") {
      setReceivedAmount(Number(amount * PER_DOLLAR_PRICE));
    }
  }, [paymentType, amount]);

  const handleBuy = async () => {
    setLoading(true);
    try {
      await buy(paymentType, amount);
      toast.success("Successfully bought");
    } catch (e) {
      toast.error("Error in Buying");
      console.log(e.message);
    }
    setLoading(false);
    window.location.reload();
  };

  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const addedTime = {
      days: 13,
      hours: 5,
      minutes: 30,
      seconds: 60,
    };

    const targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + addedTime.days,
      currentDate.getHours() + addedTime.hours,
      currentDate.getMinutes() + addedTime.minutes,
      currentDate.getSeconds() + addedTime.seconds
    );

    const difference = targetDate - currentDate;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-full bg-[url('/assets/banner_bg.jpg')] bg-cover bg-no-repeat  p-3 md:p-7">
        <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[70%] flex flex-col items-center text-center  mt-12">
            <h1 className="text-[30px] md:text-[45px] text-white mb-[45px] leading-[1.4] tracking-[-0.01em] font-semibold">
              Empowering Your Digital World With
              <span className="text-[#00C4F4]">
                {" "}
                Next-Gen Blockchain Solutions
              </span>
            </h1>

            <div className="bg-[#030B15] opacity-95 p-4 md:p-8 rounded">
              <h2
                className="text-base md:text-[20px] tracking-[-0.01em] text-white font-semibold mb-5"
                style={{ wordBreak: "break-word" }}
              >
                <span className="text-[#00c4f4]">Our Contract Address:</span>{" "}
                0x03C7E157360886881624Cd4B4dab9452A613F906
              </h2>
              <h2
                className="text-base md:text-[20px] tracking-[-0.01em] text-white font-semibold mb-10"
                style={{ wordBreak: "break-word" }}
              >
                Project Created On The{" "}
                <span className="text-[#daa520]">
                  BINANCE - BNB SMART CHAIN Blockchain
                </span>
              </h2>
              <h2 className="text-[26px] tracking-[-0.01em] text-white font-semibold mb-5">
                PreSale Will Start On
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="bg-[#0B1D33] p-[10px] px-[50px] flex flex-col items-center justify-center rounded-md w-full sm:w-auto">
                  <h2 className="text-[40px] text-[#00c4f4] font-semibold">
                    {timeLeft.days}
                  </h2>
                  <span className="text-[14px]">Days</span>
                </div>
                <div className="bg-[#0B1D33] p-[10px] px-[50px] flex flex-col items-center justify-center rounded-md w-full sm:w-auto">
                  <h2 className="text-[40px] text-[#ff9700] font-semibold">
                    {timeLeft.hours}
                  </h2>
                  <span className="text-[14px]">Hours</span>
                </div>
                <div className="bg-[#0B1D33] p-[10px] px-[50px] flex flex-col items-center justify-center rounded-md w-full sm:w-auto">
                  <h2 className="text-[40px] text-[#ff1d45] font-semibold">
                    {timeLeft.minutes}
                  </h2>
                  <span className="text-[14px]">Minutes</span>
                </div>
                <div className="bg-[#0B1D33] p-[10px] px-[50px] flex flex-col items-center justify-center rounded-md w-full sm:w-auto">
                  <h2 className="text-[40px] text-[#12d176] font-semibold">
                    {timeLeft.seconds}
                  </h2>
                  <span className="text-[14px]">Seconds</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-[50%] lg:w-1/3 mx-auto">
            <div className="bg-[#080531] rounded-2xl" id="presale-form">
              <div className="p-5 md:p-8 space-y-5">
                <div className="space-y-5">
                  <p className="font-bold uppercase text-center italic text-[48px]/[55px] w-full truncate bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text">
                    $463,400.09
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm text-white/50">
                      92.68% of minimum goal raised
                    </p>
                    <div className="relative h-3 overflow-hidden rounded-xl bg-white/20">
                      <div
                        className="absolute inset-0 h-full bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90"
                        style={{ width: "92.68%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-right text-white/50">$500,000</p>
                  </div>
                  <p className="text-2xl font-semibold text-center">
                    832 Participants
                  </p>
                  <p className="text-sm text-center text-white/50">
                    Listing Price = $0.2
                  </p>
                  <hr className="border-white/10" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5">
                  <p className="text-sm text-center text-white/50">
                    1 WAX = $0.005
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-full gap-1.5">
                    <div className="flex gap-0.5 rounded-xl overflow-hidden"></div>
                    <div className="flex items-center gap-4">
                      <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
                        <button
                          className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                            paymentType === "BSC"
                              ? "bg-[#00b4f4]"
                              : "bg-white/10"
                          }`}
                          onClick={() => setPaymentType("BSC")}
                        >
                          <div className="relative flex">
                            <img
                              src="./images/chains/binance.svg"
                              alt="BSC"
                              className="object-contain w-4 h-4"
                            />
                          </div>
                          BSC
                        </button>
                        <button
                          className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                            paymentType === "USDT"
                              ? "bg-[#00b4f4]"
                              : "bg-white/10"
                          }`}
                          onClick={() => setPaymentType("USDT")}
                        >
                          <div className="relative flex">
                            <img
                              src="./images/tokens/usdt.svg"
                              alt="USDT"
                              className="object-contain w-4 h-4"
                            />
                            <img
                              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-[#00b4f4]"
                              src="./images/chains/ethereum.svg"
                            />
                          </div>
                          USDT
                        </button>
                        <button
                          className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 b ${
                            paymentType === "USDC"
                              ? "bg-[#00b4f4]"
                              : "bg-white/10"
                          }`}
                          onClick={() => setPaymentType("USDC")}
                        >
                          <div className="relative flex">
                            <img
                              src="./images/tokens/busd.png"
                              alt="USDC"
                              className="object-contain w-4 h-4"
                            />
                            <img
                              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-[#00b4f4]"
                              src="./images/chains/ethereum.svg"
                            />
                          </div>
                          BUSD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="from-token"
                    className="text-xs font-semibold uppercase text-white/50"
                  >
                    Amount in <span className="text-[#00b4f4]">BSC</span> you
                    pay
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b4f4]"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                      <img
                        src={
                          paymentType === "BSC"
                            ? "./images/chains/binance.svg"
                            : paymentType === "USDT"
                            ? "./images/tokens/usdt.svg"
                            : "./images/tokens/busd.png"
                        }
                        alt="ETH"
                        className="object-contain w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="from-token"
                      className="text-sm font-semibold uppercase text-white/50"
                    >
                      Amount in WAX you receive
                    </label>
                    <label
                      htmlFor="from-token"
                      className="text-sm font-semibold uppercase text-white/50"
                    >
                      Balance:{" "}
                      {stat?.balanceInEth
                        ? Number(stat.balanceInEth).toFixed(3)
                        : 0}
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={receivedAmount}
                      className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b4f4]"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                      <img
                        src={logo}
                        alt="HPLT"
                        className="object-contain w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                {!isConnected && (
                  <button
                    className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-[#00b4f4] hover:bg-[#00b4f4]/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={
                      isConnected
                        ? () => open({ view: "Account" })
                        : () => open({ view: "Connect" })
                    }
                  >
                    Connect Wallet
                  </button>
                )}
                {isConnected && (
                  <button
                    onClick={handleBuy}
                    className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-[#00b4f4] hover:bg-[#00b4f4]/80 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <ClipLoader
                        color={color}
                        loading={loading}
                        css={override}
                        size={25}
                      />
                    ) : (
                      "Buy"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomGamesSection;
