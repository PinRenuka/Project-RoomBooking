import { useNavigate } from "react-router-dom";

const BackTotable = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Back
    </button>
  );
};

export default BackTotable;