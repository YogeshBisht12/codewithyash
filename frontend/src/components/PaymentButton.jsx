import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export default function PaymentButton({ amount = 499 }) {
  const { userId, user } = useAuth();

  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post("/api/payment/create-order", {
        amount,
        userId,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "CodeWithYash",
        description: "Premium Resource Access",
        order_id: order.id,
        handler: async function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          await axios.post("/api/payment/success", { userId });
        },
        prefill: { email: user?.emailAddresses[0]?.emailAddress || "" },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed, try again.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg"
    >
      Buy Premium
    </button>
  );
}
