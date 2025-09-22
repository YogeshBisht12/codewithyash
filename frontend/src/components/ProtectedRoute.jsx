import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";
import PaymentButton from "./PaymentButton";

export default function ProtectedRoute({ children }) {
  const { isSignedIn, userId } = useAuth();
  const [isPremium, setIsPremium] = useState(null);

  useEffect(() => {
    if (isSignedIn && userId) {
      axios
        .get(`/api/user/${userId}`)
        .then(res => setIsPremium(res.data.isPremium))
        .catch(err => {
          console.log(err);
          setIsPremium(false);
        });
    }
  }, [isSignedIn, userId]);

  if (!isSignedIn) return <RedirectToSignIn />; // Clerk login
  if (isPremium === null) return <p>Loading...</p>;
  if (!isPremium)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-lg mb-4">
          🚫 You must purchase premium to access this page.
        </p>
        <PaymentButton amount={499} />
      </div>
    );

  return children;
}
