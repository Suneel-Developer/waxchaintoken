import rbLZmafY from "../../public/assets/1-rbLZmafY.png";
import bigCoin from "../../public/assets/big-coin-DFHagV5H.png";
import gz4Wsh from "../../public/assets/2-F-gz4Wsh.png";
import U5avsSkT from "../../public/assets/3-U5avsSkT.png";

function PressMediaSection() {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-10">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          PRESS &amp; MEDIA
        </h3>
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 md:mt-20 w-full">
            <img src={rbLZmafY} className="h-[98px]" />
            <p className="text-center text-sm font-medium">
              This gaming-related project’s inviting atmosphere and excellent
              rewards make it a success. As such, many analysts think it could
              be the next billion-dollar crypto.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 w-full">
            <img src={bigCoin} className="w-[150px] hidden md:block" />
            <div className="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 w-full">
              <img src={gz4Wsh} className="h-[98px]" />
              <p className="text-center text-sm font-medium">
                Overall, Waxchain Token is one of the only projects that can
                provide a sustainable passive income to holders - regardless of
                the overall market conditions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-5 rounded-2xl bg-[#332A6A] md:p-7 md:mt-20 w-full">
            <img src={U5avsSkT} className="h-[98px]" />
            <p className="text-center text-sm font-medium">
              Waxchain Token is on a mission to create the world’s leading
              crypto-based online , where holders of its token can earn a daily
              yield based on the ’s performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PressMediaSection;
