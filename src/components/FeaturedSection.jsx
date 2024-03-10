import featured1 from "../../public/assets/1-v37W3mQo.png"
import featured2 from "../../public/assets/2-HRYc7bwi.png"
import featured3 from "../../public/assets/3-0cQeAvH3.png"
import featured4 from "../../public/assets/4-Zy0Rf15m.png"
import featured5 from "../../public/assets/5-N1SqEq0E.png"
import featured6 from "../../public/assets/6-X---C9sK.png"
import featured8 from "../../public/assets/8-UHpbF946.png"
import featured9 from "../../public/assets/9-wXpfGylS.png"
import featured10 from "../../public/assets/10-duixHgts.png"
import featured11 from "../../public/assets/11-Frwvoa4O.png"
import featured12 from "../../public/assets/12-WUeYYCNn.png"

function FeaturedSection() {
  return (
    <>
    <div className="flex flex-col gap-5 md:gap-10">
              <h3
                className="text-center text-3xl font-extrabold italic uppercase md:text-6xl"
              >
                FEATURED IN
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-4">
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured1}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured2}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured3}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured4}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured5}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured6}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src="data:image/png;base64,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"
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured8}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured9}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured10}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured11}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-xl bg-[#363079] h-12 md:h-[92px]"
                >
                  <img
                    src={featured12}
                    className="h-[25px] md:h-[50px]"
                  />
                </div>
              </div>
            </div>
    </>
  )
}

export default FeaturedSection