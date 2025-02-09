"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import React from "react";
import Shop from "../components/page1";

const Page = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col justify-center items-start px-20 py-28 mt-6 w-full text-center bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <h1 className="text-4xl font-bold text-indigo-950 ml-5">Shop List</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex gap-1.5 self-start mt-2.5 text-base font-medium">
            <li className="flex gap-1 text-black">
              <a href="/" className="grow hover:text-pink-500">Home</a>
              <span aria-hidden="true">.</span>
            </li>
            <li className="flex gap-1 text-black">
              <a href="/pages" className="hover:text-pink-500">Pages</a>
              <span className="text-pink-500" aria-hidden="true">.</span>
            </li>
            <li className="text-pink-500" aria-current="page">ShopList</li>
          </ol>
        </nav>
      </div>

      {/* Shop Content */}
      <div className="mt-32 ml-20">
        <h2 className="text-2xl font-bold text-violet-950">Ecommerce Accessories & Fashion items</h2>
        <div className="self-start mt-2 text-xs text-slate-400">About 9,620 results (0.62 seconds)</div>
      </div>

      {/* Authentication Handling */}
    
      
      
    

      <Shop />
    </div>
  );
};

export default Page;
