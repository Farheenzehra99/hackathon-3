interface FeatureCardProps {
    image:string ,
    title: string ,
    description: string
  }
  
  export function FeatureCard({ image , title, description }: FeatureCardProps) {
    return (
      <div className="text-center  bg-white  shadow-md md:shadow-2xl rounded-xl px-8 border hover:border-[4px] duration-500 cursor-pointer   hover:border-b-orange-500 py-16">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
          <img
          src={image} alt={title}/>
        </div>
        <h3 className="mb-2 text-lg font-bold text-[#151875]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    )
  }
  
  