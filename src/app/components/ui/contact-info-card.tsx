interface ContactInfoCardProps {
    icon: React.ReactNode
    title: string
    description: string
    color: string
  }
  
  export function ContactInfoCard({
    icon,
    title,
    description,
    color,
  }: ContactInfoCardProps) {
    return (
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-[#151875]">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    )
  }
  
  