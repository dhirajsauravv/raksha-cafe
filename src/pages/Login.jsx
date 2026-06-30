import { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <form className="border-2 w-100  border-amber-800 text-center rounded-2xl p-4 bg-amber-100 text-lg shadow-2xl">
          <div className="">
            <h1 className="text-center text-3xl text-amber-700 pb-7 font-bold">
              {isRegistering ? "Sign Up" : "Sign In"}
            </h1>
          </div>
          {isRegistering && (
            <div className="flex justify-between pt-4">
              <label className="font-bold text-amber-500">Name: </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border rounded-lg text-center bg-amber-50"
              />
            </div>
          )}
          <div className="py-4 flex justify-between ">
            <label className="pr-2 font-bold text-amber-500">
              Email Address:{" "}
            </label>
            <input
              className="border rounded-lg text-center bg-amber-50 "
              type="email"
              placeholder="Enter your email"
              id="email"
            />
          </div>
          <div className="pb-4 flex justify-between ">
            <label className="font-bold text-amber-500">Password: </label>

            <input
              className="border rounded-lg text-center bg-amber-50"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <div className="flex justify-center py-8 ">
            <button
              type="submit"
              className="border-2 border-amber-400 bg-amber-400 flex justify-center rounded-full px-2  hover:bg-amber-400/75 hover:scale-105 ease-in-out duration-300"
            >
              {isRegistering ? "Sign Up" : "Sign In"}
            </button>
          </div>

          <div className="flex justify-center">
            <p>
              {isRegistering
                ? "Already have an account? "
                : "Don't have an account? "}
              <button
                type="button"
                className="text-amber-600 font-bold hover:scale-105"
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
