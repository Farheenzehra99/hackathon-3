'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function AccountPage() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-[1200px] mx-auto px-4 ">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">My Account</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">My Account</span>
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-[#151875] mb-4">My Account</h1>

          {/* Breadcrumb */}
          <div className="bg-gray-200 py-3 px-6 rounded-md text-sm text-center">
            <span className="text-black">Home</span>
            <span className="text-black mx-2">.</span>
            <span className="text-black">Pages</span>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">My Account</span>
          </div>

          {/* Login Form */}
          <div className="bg-white mt-8 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-[#151875] mb-4">Login</h2>
            <p className="text-gray-600 mb-6">
              Please login using account detail below.
            </p>

            {/* Form */}
            <form>
              {/* Email Address */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Forgot Password */}
              <div className="mb-4 text-right">
                <Link href="/forgetpassword" className="text-[#FB2E86] hover:underline">
                  Forgot your password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#F94C9B] transition-colors"
              >
                Sign In
              </button>
            </form>

            {/* Create Account */}
            <div className="text-center mt-6 text-gray-600">
              Don’t have an Account?{' '}
              <Link href="/createaccount" className="text-[#FB2E86] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
              <Image
            src="/images/logo.png"
            alt="logos"
            width={700}
            height={400}
            className='ml-80'
          />

    </>
  );
}

export default AccountPage;