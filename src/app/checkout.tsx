// components/CheckoutFlow.ts
import { useState } from 'react';

const CheckoutFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    billingAddress: '',
    shippingAddress: '',
    paymentMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      {step === 1 && (
        <div>
          <h2 className="text-xl">Billing Address</h2>
          <input
            type="text"
            name="billingAddress"
            placeholder="Enter your billing address"
            value={formData.billingAddress}
            onChange={handleChange}
            className="border p-2 my-2 w-full"
          />
          <button onClick={nextStep} className="btn">Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl">Shipping Address</h2>
          <input
            type="text"
            name="shippingAddress"
            placeholder="Enter your shipping address"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="border p-2 my-2 w-full"
          />
          <button onClick={prevStep} className="btn">Back</button>
          <button onClick={nextStep} className="btn">Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl">Payment Details</h2>
          <input
            type="text"
            name="paymentMethod"
            placeholder="Enter your payment method"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="border p-2 my-2 w-full"
          />
          <button onClick={prevStep} className="btn">Back</button>
          <button className="btn">Submit</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutFlow;




