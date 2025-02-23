"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
  name: string;
  password: string;
  email: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({});
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <div className="signin-page">
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">Email</label>
        <input {...register("email", { required: true })} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <button type="submit" className="submit-button">
          Log in
        </button>
      </form>
    </div>
  );
}
