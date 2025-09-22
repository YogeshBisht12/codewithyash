import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function ProtectedRoute() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // or spinner

  return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
