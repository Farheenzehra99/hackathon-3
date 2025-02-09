import Link from "next/link"
// import { Button } from "../components/ui/Button"
import { FeatureCard } from "../components/ui/feature-card"
import { TestimonialCard } from "../components/ui/testimonal-card";



export default function AboutPage() {
  return (
    <div >
      {/* Page Header */}
      <div className=" h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center text-[#151875] md:text-left font-bold mb-4">About Us</h1>
          <div className="flex justify-center text-[#151875] md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container  md:w-[1170px] mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute mx-4 h-full w-full "></div>
            <img
              src="/images/about.png"
              alt="About Us"
              className="relative w-full rounded-lg"
            />
          </div>
          <div className="md:pl-5 py-5">
            <h2 className="text-3xl font-bold text-[#151875] mb-8">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-gray-600 text-[15px] mb-8 md:mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
              amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            {/* <Button className="bg-[#FB2E86] text-white px-8 rounded-[5px] hover:bg-[#FB2E86]/90">
              Contact us
            </Button> */}
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className=" my-8 pb-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#151875] mb-12">
            Our Features
          </h2>
          <div className="grid gap-8 md:grid-cols-4 ">
          <FeatureCard
              image="/images/icon1.png"
              title="Free Delivery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
           />
            <FeatureCard
               image="/images/icon2.png"
              title="100% Cash Back"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <FeatureCard
              image="/images/icon3.png"
              title="Quality Product"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <FeatureCard
               image="/images/icon4.png"
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="  mx-auto bg-gray-100  mb-20 md:mb-36 px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-12">
          Our Client Say!
        </h2>
        <div className="flex justify-center   mx-auto ">
          <div className=" md:w-[680px]">
          <TestimonialCard
            name="Selina Gomez"
            role="Ceo At Webecy Digital"
            image="/images/client2.png"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam."
          />
         </div>
        </div>
      </div>
    </div>
  )
}
