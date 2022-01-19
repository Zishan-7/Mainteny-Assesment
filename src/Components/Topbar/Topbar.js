import axios from "axios";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const login = async () => {
    const response = await axios.post("/api/v1/auth/logout", {
      id: localStorage.getItem("id"),
    });
    if (response.data.statusCode === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <div className="h-14 border-b-2 flex items-center justify-around">
      <h1 className="text-2xl font-bold">Cool University</h1>
      <p className="hidden md:flex text-xl font-medium">Welcome Admin!</p>
      <button
        onClick={login}
        className="px-7 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
