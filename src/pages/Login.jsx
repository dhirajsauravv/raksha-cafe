import { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <form className="border text-center rounded-2xl p-4 bg-amber-100">
          <div className="">
            <h1>{isRegistering ? "Sign Up" : "Sign In"}</h1>
          </div>
          {isRegistering && (
            <div className="flex justify-between pt-4">
              <label htmlFor="">Name: </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border text-center"
              />
            </div>
          )}
          <div className="py-4 flex justify-between">
            <label className="pr-2">Email Address: </label>
            <input
              className="border text-center"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
          </div>
          <div className="pb-4 flex justify-between">
            <label htmlFor="password">Password: </label>

            <input
              className="border text-center"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <div className="flex justify-center pb-4 ">
            <button
              type="submit"
              className="border flex justify-center rounded-full px-2"
            >
              {isRegistering ? "Sign Up" : "Sign In"}
            </button>
          </div>

          <div className="flex justify-center">
            <p>
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}
              <button
                type="button"
                className="text-amber-600 font-bold"
                onClick={handleClick}
              >
                {isRegistering ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
