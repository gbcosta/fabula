import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@components/formInput";

const schema = z.object({
  username: z.string().min(1, { message: "Name is required" }),
  password: z.string().min(8, { message: "Minimal length is 8" }),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col border-2 border-black p-8 rounded-md">
          <label className="font-bold">Username</label>
          <FormInput register={register} field={"username"} errors={errors} />
          <label className="font-bold mt-4">Password</label>
          <FormInput register={register} field={"password"} errors={errors} />
          <button
            className="bg-black text-white rounded-md py-2 mt-6"
            type="submit"
          >
            Login
          </button>
          <span className="mt-2 text-sm">
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
