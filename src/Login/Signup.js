import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post("https://bend1.onrender.com/register", {
        name,
        email,
        password,
      });

      console.log("Response:", response); // Log the entire response

      if (response.data.success) {
        alert("you are part of our DataBase");

        navigate("/login");
      } else {
        // Log the error message received from the server
        alert("you are part of our DataBase");
        navigate("/login");
        console.log("Error Message:", response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-input w-full border rounded focus:outline-none focus:border-blue-500 text-gray-800"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-input w-full border rounded focus:outline-none focus:border-blue-500 text-gray-800"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-input w-full border rounded focus:outline-none focus:border-blue-500 text-gray-800"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-full rounded text-black"
            disabled={loading} // Disable the button during loading
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-3 text-center text-gray-600">
          Already Have an Account?
        </p>
        <Link
          to="/login"
          className="block text-center btn btn-default border w-full bg-light rounded text-decoratio-none text-black mt-2"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
