import { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h1>{isRegistering ? "Sign Up" : "Sign In"}</h1>
        </div>
        <form action="">
          {isRegistering && (
            <div>
              <label htmlFor="">Name: </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border"
              />
            </div>
          )}
          <div className="py-4">
            <label htmlFor="email">Email Address: </label>
            <input
              className="border"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>

            <input
              className="border"
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>

          <button type="submit" className="border">
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>

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
        </form>
      </div>
    </div>
  );
}

export default Login;
