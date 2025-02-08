import { useNavigate } from "react-router-dom";

const Lecbutt = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/picking")}
      className="px-6 py-2 rounded-full bg-[#FFB5B5] text-black hover:opacity-90 transition-opacity"
    >
      Lecture
    </button>
  );
};

export default Lecbutt;