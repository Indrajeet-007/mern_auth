import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { signin } from "../../../backend/controllers/auth.controller";

function SignIn() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", JSON.stringify(formData));
    try {
      setLoading(true);
      setError(false);
      const res = await axios.post("/api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response Data:", res);
      setLoading(false);
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-10 font-semibold">SignIn</h1>
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
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 hover:bg-slate-800 disabled:opacity-90"
        >
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Don't have an account?</p>
        <span className="text-blue-500">
          <Link to="/sign-up">SignUp</Link>
        </span>
      </div>
      <p className="text-red-600 mt-5">{error && "Something went wrong"}</p>
    </div>
  );
}

export default SignIn;
