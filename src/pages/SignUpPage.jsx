import { register } from "../assets/background";
import { logo } from "../assets/icons";
import Register from "../components/Register";

const SignUpPage = () => {
  return (
    <section id="Sign-in" className="flex max-container">
      <div className="flex-1">
        <div className="flex">
          <img src={logo} alt="game-quest logo" className="w-8" />
          <span className="text-2xl font-semibold my-16 pl-2">Game Quest</span>
        </div>
        <Register/>
      </div>
      <div className="flex-1">
        <img
          src={register}
          alt="signin background"
          className="relative z-10 w-full h-full mx-auto"
        />
      </div>
    </section>
  );
};

export default SignUpPage;
