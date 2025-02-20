"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Input = {
  name: string;
  password: string;
  email: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({});
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  console.log(watch("name"));
  return (
    <div className="signup-page">
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password", { required: true })} />
        <label htmlFor="password">Email</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <button type="submit" className="submit-button">
          Sign Up
        </button>{" "}
      </form>
    </div>
  );
}
