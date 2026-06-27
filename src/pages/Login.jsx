import { Link } from "react-router";

function Login() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h1>Login</h1>
        </div>
        <form action="">
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
            Sign In
          </button>

          <p>
            Don't have account?{" "}
            <Link to="/Register">
              <button type="button" className="text-amber-600 font-bold">
                Register
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
