import { Link } from "react-router-dom";

const InputLoginForm = () => {
  return (
    <input className="outline-none border-2 border-black rounded-md px-2"></input>
  );
};

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form>
        <div className="flex flex-col">
          <label className="font-bold">Username</label>
          <InputLoginForm />
          <label className="font-bold mt-4">Password</label>
          <InputLoginForm />
          <button
            className="bg-black text-white rounded-md py-2 mt-6"
            type="submit"
          >
            Login
          </button>
          <span className="mt-1 text-sm">
            If you are not registered click{" "}
            <Link className="text-blue-600" to="/register">
              here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
export const LoginPage = () => {
  return (
    <div className="">
      <LoginForm />
    </div>
  );
};
