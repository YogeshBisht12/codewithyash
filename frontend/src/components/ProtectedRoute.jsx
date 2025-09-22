import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();

  // If user is not signed in, redirect them to Clerk's sign-in page
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // If user is signed in, allow access
  return children;
}
