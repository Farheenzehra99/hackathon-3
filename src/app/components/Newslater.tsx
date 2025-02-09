'use client';
import Link from 'next/link';
import Image from 'next/image';

function Newslater() {
  return (
    <div className="w-full bg-white py-10">
      {/* Newslater Section */}
      <div
        className="w-full bg-cover bg-center py-60"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#151875] mb-6">
            Get Latest Update By Subscribe Our Newsletter
          </h2>

          <Link href="/shoplist">
          <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-non text-lg font-medium">
            Shop Now
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Newslater;