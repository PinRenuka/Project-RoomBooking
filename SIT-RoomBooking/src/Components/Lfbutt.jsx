import { useNavigate } from "react-router-dom";

const Lfbutt = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/picking")}
      className="px-6 py-2 rounded-full bg-[#B5D5E5] text-black hover:opacity-90 transition-opacity"
    >
      LF
    </button>
  );
};

export default Lfbutt;