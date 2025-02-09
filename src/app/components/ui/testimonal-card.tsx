interface TestimonialCardProps {
    name: string
    role: string
    image: string
    testimonial: string
  }
  
  export function TestimonialCard({
    name,
    role,
    image,
    testimonial,
  }: TestimonialCardProps) {
    return (
      <div className="text-center  p-4">
        <div className="mb-4 flex justify-center gap-2">
          <img
            src={image}
            alt={name}
            className=" object-cover"
          />
        </div>
        <h3 className="mb-1 font-bold text-lg text-[#151875]">{name}</h3>
        <p className="mb-4 text-sm text-gray-500">{role}</p>
        <p className="text-gray-600">{testimonial}</p>
      </div>
    )
  }
  
  