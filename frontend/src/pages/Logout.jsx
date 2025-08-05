import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // ✅ Clear token and auth state
    navigate("/login"); // ✅ Redirect to login page
  }, [logout, navigate]);

  return (
    <section className="bg-[#0D1117] min-h-screen flex items-center justify-center text-white">
      <h1 className="text-2xl font-semibold">Logging you out...</h1>
    </section>
  );
}
