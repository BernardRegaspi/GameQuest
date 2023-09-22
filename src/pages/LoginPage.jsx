import { signin } from "../assets/background";
import { logo } from "../assets/icons";
import SignIn from "../components/SignIn";

const LoginPage = () => {
  return (
    <section id="Sign-in" className="flex max-container">
      <div className="flex-1">
        <div className="flex">
          <img src={logo} alt="game-quest logo" className="w-8" />
          <span className="text-2xl font-semibold my-16 pl-2">Game Quest</span>
        </div>
        <SignIn />
      </div>
      <div className="flex-1">
        <img
          src={signin}
          alt="signin background"
          className="relative z-10 w-full h-full mx-auto"
        />
      </div>
    </section>
  );
};

export default LoginPage;
