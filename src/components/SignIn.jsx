import { google } from "../assets/icons";

const Login = () => {
  return (
    <>
      <div className="mb-10 max-w-sm mx-auto">
        <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="text-xs">
          Please enter your details
        </p>
      </div>
      <form className="text-sm max-w-sm mx-auto">
        <div className="my-5">
          <label>
            <span className="font-semibold text-sm">Email</span>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div className="my-5">
          <label>
            <span className="font-semibold text-sm">Password</span>
            <input type="password" className="input" placeholder="Password" />
          </label>
        </div>
        <div>
          <p className="text-right font-bold">Forgot Password</p>
        </div>
        <div className="my-5">
          <button className="mb-5 button-full border-none bg-cc-green text-white">
            Sign in
          </button>
          <button className="button-full border-cc-gray flex items-center justify-center">
            <img src={google} alt="Google Logo" className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>
        </div>
        <div>
          <p className="text-center">
            Don't have an account? <span className="font-bold">Sign up</span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
