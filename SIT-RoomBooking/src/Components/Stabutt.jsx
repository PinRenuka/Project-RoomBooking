import { useNavigate } from "react-router-dom";

const Stabutt = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/picking")}
      className="px-6 py-2 rounded-full bg-[#B8E5B5] text-black hover:opacity-90 transition-opacity"
    >
      Staff
    </button>
  );
};

export default Stabutt;