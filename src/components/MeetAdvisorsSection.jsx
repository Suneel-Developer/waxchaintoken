import Dtk_Ovhf from "../../public/assets/2-Dtk_Ovhf.png"
import Qd6i5JF5 from "../../public/assets/1-Qd6i5JF5.png"
import Dktv0Pp from "../../public/assets/3-Dktv0Pp-.png"


function MeetAdvisorsSection() {
  return (
    <>
      <div id="team" className="flex flex-col gap-5 md:gap-10">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          Meet some of our advisors
        </h3>
        <div className="flex flex-col justify-center gap-7 md:gap-10 md:grid md:grid-cols-3">
          <div className="flex flex-col items-center">
            <img src={Dtk_Ovhf} className="w-[200px] mb-5" />
            <h4 className="text-center text-2xl font-extrabold uppercase italic">
              Dr. Sviatoslav Bykhovski
            </h4>
            <p className="text-center text-white/50 mt-2.5">
              Dr. Sviatoslav Bykhovski has over 20 years experience in finance
              and fundraising, Sviatoslav has gathered a substantial amount of
              experience in funding and growing companies to $10m+ yearly
              revenue and will help us with his expertise
            </p>
            <div className="flex items-center gap-5 mt-5"></div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Qd6i5JF5} className="w-[200px] mb-5" />
            <h4 className="text-center text-2xl font-extrabold uppercase italic">
              Pedro Ferreira
            </h4>
            <p className="text-center text-white/50 mt-2.5">
              Pedro Ferreira is an expert in data analysis and has been into
              project coordination for many years. Pedro will help us with
              analyzing the industry and competitors in order to have the best
              possible launch
            </p>
            <div className="flex items-center gap-5 mt-5"></div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Dktv0Pp} className="w-[200px] mb-5" />
            <h4 className="text-center text-2xl font-extrabold uppercase italic">
              Heather Dryden
            </h4>
            <p className="text-center text-white/50 mt-2.5">
              Heather Dryden has over 20 years of experience in Innovation and
              Economic Development, being on the former Advisory Committee for
              the ICANN, Heather can provide us with valuable expertise when it
              comes to the regulatory and privacy policy aspect.
            </p>
            <div className="flex items-center gap-5 mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetAdvisorsSection;
