import { useEffect, useState } from "react";
import { CircleUserRound, Mail, RectangleEllipsis } from "lucide-react";
import useAuth from "../services/useAuth.js";
import { useNavigate } from "react-router";

const InputWithIcon = ({ Icon, placeholder, type, name }) => {
  return (
    <div className="relative mb-4 w-full">
      <input
        className="w-full bg-amber-50 rounded-3xl py-3 pl-5 pr-11 focus:outline-amber-400"
        type={type}
        placeholder={placeholder}
        name={name}
        required
      />
      <Icon className="absolute right-0 top-1/2 -translate-1/2" />
    </div>
  );
};

function Login() {
  const navigate = useNavigate();
  const { login, register, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const [isRegistering, setIsRegistering] = useState(false);

  const handleClick = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (isRegistering) {
      register(name, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center w-150 h-175 border-amber-800 text-center rounded-2xl p-4 bg-amber-100 text-lg shadow-2xl">
        <h1 className="text-center text-5xl text-amber-700 pt-15 pb-15 font-bold h-1/4">
          {isRegistering ? "Sign Up" : "Sign In"}
        </h1>
        <form
          className="flex flex-1 flex-col items-center"
          onSubmit={handleSubmit}
        >
          {isRegistering && (
            <InputWithIcon
              Icon={CircleUserRound}
              placeholder={"Enter Name"}
              type={"text"}
              name={"name"}
            />
          )}
          <InputWithIcon
            Icon={Mail}
            placeholder={"Enter Email"}
            type={"email"}
            name={"email"}
          />

          <InputWithIcon
            Icon={RectangleEllipsis}
            placeholder={"Enter Password"}
            type={"password"}
            name={"password"}
          />
          <div className="flex flex-col justify-center gap-10 h-1/4">
            <button
              type="submit"
              className="border-2 border-amber-400 bg-amber-400 flex justify-center rounded-full px-2  hover:bg-amber-400/75 hover:scale-105 ease-in-out duration-300 w-100 h-12 items-center"
            >
              {isRegistering ? "Sign Up" : "Sign In"}
            </button>

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
