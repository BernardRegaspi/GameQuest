import { landingPageImg } from "../assets/background";

const LandingPage = () => {
  return (
    <section id="landing-page" className="max-container">
      <div className="my-5">
        <h1 className="text-6xl text-center font-bold font-montserrat">
          Game Quest
        </h1>
      </div>
      <div className="flex my-10">
        <div className="flex-1">
          <div className="my-10">
            <h1 className="text-5xl font-inter mb-10">
              Extend Invitation or Dive into the Fun: The Choice is Yours!
            </h1>
            <p className="">
              Unleash the power of connection as players come together through
              inviting, joining, competing, and enjoying activities
              collectively.
            </p>
          </div>
          <div className="mb-[120px]">
            <button className="button border-2 border-cc-green mr-7">
              Login
            </button>
            <button className="button bg-cc-blue">Sign up</button>
          </div>
        </div>
        <div className="flex-1 my-10">
          <img
            src={landingPageImg}
            alt="landing page img"
            className="rounded-tl-[60px] max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
