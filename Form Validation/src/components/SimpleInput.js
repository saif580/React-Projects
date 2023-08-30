import { useForm } from "react-hook-form";

const SimpleInput = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input {...register("name", { required: true })} />
        {errors.name?.type === "required" && (
          <p role="alert">Name is required</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          {...register("Email", {
            required: true,
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
        />
        {errors.Email?.message && (
    <p>{errors.Email.message}</p>
  )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
