interface GradientContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  rounded: 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
}

export default function GradientContainer({children, rounded, className, ...props}: GradientContainerProps) { 
  return (
    <div className={`relative inline-block p-[2px] shadow-md ${rounded} bg-gradient-to-br from-orange-500 to-pink-500 ${className}`} {...props}>
      <div className={`${rounded} bg-white`}>
        {children}
      </div>
    </div>
  )
}
