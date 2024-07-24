const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col">
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Login</button>
      </div>
    </form>
  );
};
export const LoginPage = () => {
  return (
    <div className="max-w-[400px]">
      <LoginForm />
    </div>
  );
};
