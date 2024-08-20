import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./signin";

function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value});
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-9 font-semibold">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 bg-slate-100 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled
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
