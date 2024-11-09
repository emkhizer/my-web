import Link from 'next/link';
const PaymentPage: React.FC = () => {
  return (
    <div className="py-12 flex flex-col items-center bg-teal-100 px-6">
      <h1 className="text-3xl font-bold mb-4">Enter Your Details</h1>
      <div className="flex flex-col border-2  px-96 items-center justify-center min-h-screen">
      <form>
  <div className="w-96">
    <input
      type="text"
      placeholder="Enter your Name"
      className="block p-2 mb-4 border rounded w-full mx-auto"
      required
    />
    <input
      type="email"
      placeholder="Enter your Email"
      className="block p-2 mb-4 border rounded w-full mx-auto"
      required
    />
    <input
      type="number"
      placeholder="Card Number"
      className="block p-2 mb-4 border rounded w-full mx-auto"
      required
    />
    <input
      type="text"
      placeholder="Address"
      className="block p-2 mb-4 border rounded w-full mx-auto"
      required
    />
  </div>
  <span className="flex flex-col items-center">
    <Link href="/thank-you">
      <button 
        className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900"
        type="submit"
      >
        Place Your Order
      </button>
    </Link>
  </span>
</form>

      </div>
    </div>
  );
};

export default PaymentPage;
