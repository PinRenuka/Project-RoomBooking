import { useNavigate } from "react-router-dom";

const Stubutt = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/picking")}
      className="px-6 py-2 rounded-full bg-[#FFE5A5] text-black hover:opacity-90 transition-opacity"
    >
      Student
    </button>
  );
};

export default Stubutt;