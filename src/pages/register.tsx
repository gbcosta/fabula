import { FormInput } from "@components/formInput";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "email is required" }),
  username: z.string().min(1, "username is required"),
  password: z.string().min(8, "Minimal length is 8"),
  confirmPassword: z.string().min(8, "Password needs to be the same"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col border-2 border-black p-8 rounded-md">
          <label className="font-bold">Email</label>
          <FormInput register={register} field="email" errors={errors} />
          <label className="font-bold mt-4">Username</label>
          <FormInput register={register} field="username" errors={errors} />
          <label className="font-bold mt-4">Password</label>
          <FormInput
            register={register}
            field="password"
            errors={errors}
            type="password"
          />
          <label className="font-bold mt-4">Confirm Password</label>
          <FormInput
            register={register}
            field="confirmPassword"
            errors={errors}
            type="password"
          />
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
