import React from 'react'

interface ButtonProps {
     type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
     title: string
     className?: string
     onClick: VoidFunction
}

const Button: React.FC<ButtonProps> = ({
     title,
     type = "button",
     className,
     onClick
}) => {
     return (
          <button
               type={type}
               className={`bg-blueAccent text-white font-bold py-3 px-5 rounded-xl 
                    hover:bg-blueAccent/90 transition duration-300 ease-in-out
                    ${className}`}
               onClick={onClick}>
               {title}
          </button>
     )
}

export default Button