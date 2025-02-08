import { useNavigate } from "react-router-dom";

const Backja = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/help")}
      className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Back
    </button>
  );
};

export default Backja;