import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/v1/auth/login", {
      email,
      password,
    });
    if (response.data.statusCode === 403 || response.data.statusCode === 401) {
    }
    if (response.data.statusCode === 200) {
      // setStudents(response.data.data);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("id", response.data.data._id);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-24 py-6 mt-4 text-left bg-white shadow-lg rounded-xl">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={login}>
          <div className="mt-4 ">
            <div className="w-full">
              <label className="block" for="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required={true}
                placeholder="Email"
                className="w-full pl-4 pr-32 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-12 py-2 mx-auto mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600 "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
