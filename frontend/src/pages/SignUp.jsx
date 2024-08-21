import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", JSON.stringify(formData));
    if (formData.username && formData.password && formData.email) {
      try {
        const res = await fetch('/api/auth/signup',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },body: JSON.stringify(formData),
        })
        const data = await res.json();
        console.log("Response Data:", data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      console.error("All fields are required!");
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-9 font-semibold">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 hover:bg-slate-800 disabled:opacity-90"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Have an account</p>
        <span className="text-blue-500">
          <Link to="/sign-in">Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
