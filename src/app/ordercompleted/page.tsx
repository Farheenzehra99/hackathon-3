// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// function OrderCompleted() {
//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 py-12">
//         <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6 text-center">
//           {/* Heading */}
//           <h1 className="text-3xl font-bold text-[#1D3178]">Order Completed</h1>

//           {/* Tick Mark Image */}
//           <div className="flex justify-center">
//             <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
//               <Image
//                 src="/images/icon5.png" // Path to your tick image
//                 alt="Order Completed Icon"
//                 width={76}
//                 height={76}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Order Complete Text */}
//           <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

//           {/* Description */}
//           <p className="text-gray-500 text-sm sm:text-base">
//             Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
//             You will receive an email confirmation when your order is completed.
//           </p>

//           <Link href="/shoplist">
//           <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-lg font-medium">
//             Continue Shopping
//           </button>
//           </Link>

//           {/* Clock Icon */}
//           <div className="flex justify-center items-center mt-4">
//             <Image
//               src="/images/icon6.png" // Path to your clock image
//               alt="Clock Icon"
//               width={80}
//               height={80}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OrderCompleted;

// "use client";

// import Link from "next/link";
// import { Button } from "../components/ui/Button";
// import { BrandLogos } from "../components/ui/brand-logos";
// import { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { client } from "../../sanity/lib/client"; 

// // Define TypeScript types
// interface OrderDetails {
//   orderId: string;
//   shippingAddress: string;
//   deliveryStatus: string;
// }

// interface TrackingDetails {
//   trackingNumber: string;
//   estimatedDelivery: string;
//   status: string;
//   labelUrl: string;
// }

// interface OrderParamsHandlerProps {
//   setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails | null>>;
//   setTrackingDetails: React.Dispatch<React.SetStateAction<TrackingDetails>>;
// }

// // Separate component for `useSearchParams()`
// function OrderParamsHandler({ setOrderDetails, setTrackingDetails }: OrderParamsHandlerProps) {
//   const searchParams = useSearchParams();
//   const orderId = searchParams?.get("orderId") || "";

//   useEffect(() => {
//     if (!orderId) return;

//     const fetchOrderDetails = async () => {
//       try {
//         const order = await client.fetch<{
//           _id: string;
//           address: string;
//           city: string;
//           country: string;
//           postalCode: string;
//           trackingStatus?: { status?: string; estimatedDelivery?: string };
//           shippingLabel?: { trackingNumber?: string; labelUrl?: string };
//         }>(
//           `*[_type == "order" && _id == $orderId][0]`,
//           { orderId }
//         );

//         if (!order) {
//           throw new Error("Order not found");
//         }

//         setOrderDetails({
//           orderId: order._id,
//           shippingAddress: `${order.address}, ${order.city}, ${order.country}, ${order.postalCode}`,
//           deliveryStatus: order.trackingStatus?.status || "Processing",
//         });

//         setTrackingDetails({
//           trackingNumber: order.shippingLabel?.trackingNumber || "",
//           estimatedDelivery: order.trackingStatus?.estimatedDelivery || "",
//           status: order.trackingStatus?.status || "",
//           labelUrl: order.shippingLabel?.labelUrl || "",
//         });

//       } catch (error) {
//         console.error("Error fetching order details:", error);
//         toast.error("Failed to fetch order details. Please try again.");
//       }
//     };

//     fetchOrderDetails();
//   }, [orderId]);

//   return null; // This component only fetches data, no UI needed
// }

// export default function OrderCompletedPage() {
//   const [trackingDetails, setTrackingDetails] = useState<TrackingDetails>({
//     trackingNumber: "",
//     estimatedDelivery: "",
//     status: "",
//     labelUrl: "",
//   });

//   const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <main className="flex-grow">
//         <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
//           <div className="container md:w-[1177px] mx-auto px-4">
//             <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">
//               Order Completed
//             </h1>
//           </div>
//         </div>

//         <div className="container md:w-[1177px] mx-auto md:py-[200px] px-4 py-16">
//           <Suspense fallback={<p>Loading order details...</p>}>
//             <OrderParamsHandler setOrderDetails={setOrderDetails} setTrackingDetails={setTrackingDetails} />
//           </Suspense>

//           {orderDetails && (
//             <div className="text-center">
//               <h2 className="text-[36px] font-bold text-[#151875] mb-8">
//                 Your Order Is Completed!
//               </h2>
//               <p className="text-[#8D92A7] text-base mb-8">
//                 Thank you for your order! Your order is being processed. You will receive an email confirmation when your order is completed.
//               </p>
//               <span className="block font-heading text-[#151875dc] mb-8">

//               <p>Order ID: {orderDetails.orderId}</p>
//               <p>Shipping Address: {orderDetails.shippingAddress}</p>
//               <p>Delivery Status: {orderDetails.deliveryStatus}</p>
              

//               {trackingDetails.trackingNumber && <p>Tracking Number: {trackingDetails.trackingNumber}</p>}
//               {trackingDetails.estimatedDelivery && <p>Estimated Delivery: {trackingDetails.estimatedDelivery}</p>}
//               {trackingDetails.status && <p>Status: {trackingDetails.status}</p>}

//               {/* {trackingDetails.labelUrl && (
//                 <Button asChild className="bg-[#FF1788] text-white px-8 h-12 rounded-sm">
//                   <a href={trackingDetails.labelUrl} download="shipping_label.pdf">
//                     Download Shipping Label
//                   </a>
//                 </Button>
//               )} */}
//                 </span>
//               <Button asChild className="bg-[#FF1788] text-white px-8 h-12 rounded-sm">
//                 <Link href="/shop">Continue Shopping</Link>
//               </Button>
//             </div>
//           )}
//         </div>

//         <BrandLogos />
//       </main>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../sanity/lib/client";

// Define TypeScript types
interface OrderDetails {
  orderId: string;
  shippingAddress: string;
  deliveryStatus: string;
}

interface TrackingDetails {
  trackingNumber: string;
  estimatedDelivery: string;
  status: string;
  labelUrl: string;
}

// Order Fetching Logic
function OrderParamsHandler({ setOrderDetails, setTrackingDetails }: { 
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails | null>>;
  setTrackingDetails: React.Dispatch<React.SetStateAction<TrackingDetails>>;
}) {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId") || "";

  useEffect(() => {
    if (!orderId) return;

    const fetchOrderDetails = async () => {
      try {
        const order = await client.fetch<{
          _id: string;
          address: string;
          city: string;
          country: string;
          postalCode: string;
          trackingStatus?: { status?: string; estimatedDelivery?: string };
          shippingLabel?: { trackingNumber?: string; labelUrl?: string };
        }>(
          `*[_type == "order" && _id == $orderId][0]`,
          { orderId }
        );

        if (!order) {
          throw new Error("Order not found");
        }

        setOrderDetails({
          orderId: order._id,
          shippingAddress: `${order.address}, ${order.city}, ${order.country}, ${order.postalCode}`,
          deliveryStatus: order.trackingStatus?.status || "Processing",
        });

        setTrackingDetails({
          trackingNumber: order.shippingLabel?.trackingNumber || "",
          estimatedDelivery: order.trackingStatus?.estimatedDelivery || "",
          status: order.trackingStatus?.status || "",
          labelUrl: order.shippingLabel?.labelUrl || "",
        });

      } catch (error) {
        console.error("Error fetching order details:", error);
        toast.error("Failed to fetch order details. Please try again.");
      }
    };

    fetchOrderDetails();
  }, [searchParams?.toString()]);

  return null;
}

// Main Order Completed Page
export default function OrderCompletedPage() {
  const [trackingDetails, setTrackingDetails] = useState<TrackingDetails>({
    trackingNumber: "",
    estimatedDelivery: "",
    status: "",
    labelUrl: "",
  });

  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-100 py-12">
        {/* Fetch order details */}
        <OrderParamsHandler setOrderDetails={setOrderDetails} setTrackingDetails={setTrackingDetails} />

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6 text-center">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#1D3178]">Order Completed</h1>

          {/* Tick Mark Image */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
              <Image
                src="/images/icon5.png" // Path to tick image
                alt="Order Completed Icon"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </div>

          {/* Order Complete Text */}
          <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          {/* Order Details */}
          {orderDetails && (
            <div className="text-gray-700 text-sm sm:text-base space-y-2">
              <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
              <p><strong>Shipping Address:</strong> {orderDetails.shippingAddress}</p>
              <p><strong>Delivery Status:</strong> {orderDetails.deliveryStatus}</p>

              {/* Tracking Details */}
              {trackingDetails.trackingNumber && <p><strong>Tracking Number:</strong> {trackingDetails.trackingNumber}</p>}
              {trackingDetails.estimatedDelivery && <p><strong>Estimated Delivery:</strong> {trackingDetails.estimatedDelivery}</p>}
              {trackingDetails.status && <p><strong>Status:</strong> {trackingDetails.status}</p>}

              {/* Download Shipping Label Button */}
              {trackingDetails.labelUrl && (
                <Link href={trackingDetails.labelUrl} download="shipping_label.pdf">
                  <button className="bg-[#FF1788] text-white px-6 py-2 rounded-md text-lg font-medium">
                    Download Shipping Label
                  </button>
                </Link>
              )}
            </div>
          )}

          {/* Continue Shopping Button */}
          <Link href="/shoplist">
            <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-lg font-medium">
              Continue Shopping
            </button>
          </Link>

          {/* Clock Icon */}
          <div className="flex justify-center items-center mt-4">
            <Image
              src="/images/icon6.png" // Path to clock image
              alt="Clock Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
