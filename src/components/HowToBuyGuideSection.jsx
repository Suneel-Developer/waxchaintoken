import howtobuydesktop from "../../public/assets/how-to-buy-desktop-cN8S59xn.svg";
import howtobuymobilexRQtAPmD from "../../public/assets/how-to-buy-mobile-xRQtAPmD.svg";

function HowToBuyGuideSection() {
  return (
    <>
      <div
        id="how-to-buy"
        className="flex flex-col items-center gap-2.5 md:gap-10"
      >
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          How to buy <span className="text-gold">WAX</span>! Guide
        </h3>
        <img
          src={howtobuydesktop}
          className="w-full hidden md:block pointer-events-none"
        />
        <img
          src={howtobuymobilexRQtAPmD}
          className="w-full md:hidden pointer-events-none"
        />
      </div>
    </>
  );
}

export default HowToBuyGuideSection;
