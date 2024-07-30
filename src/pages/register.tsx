const InputRegisterForm = () => {
  return (
    <input className="outline-none border-2 border-black rounded-md px-2"></input>
  );
};

const RegisterForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form>
        <div className="flex flex-col border-2 border-black p-8 rounded-md">
          <label className="font-bold mt-4">Email</label>
          <InputRegisterForm />
          <label className="font-bold mt-4">Username</label>
          <InputRegisterForm />
          <label className="font-bold mt-4">Password</label>
          <InputRegisterForm />
          <label className="font-bold mt-4">Confirm Password</label>
          <InputRegisterForm />
          <button
            className="bg-black text-white rounded-md py-2 mt-6"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export const RegisterPage = () => {
  return (
    <div className="">
      <RegisterForm />
    </div>
  );
};
