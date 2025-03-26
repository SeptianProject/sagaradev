import React, { memo } from 'react'

interface ButtonProps {
     type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
     title: string
     className?: string
     onClick: VoidFunction
     isProjectBtn?: boolean
     isSecondary?: boolean
     disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
     title,
     type = "button",
     className,
     onClick,
     isProjectBtn,
     isSecondary,
     disabled = false
}) => {
     return (
          <button
               type={type}
               className={`${isProjectBtn ? `${isSecondary ? 'bg-light text-dark hover:bg-light/90'
                    : 'bg-blueAccent text-white hover:bg-blueAccent/90'} rounded-[18px] py-[10px] w-32`
                    : 'bg-blueAccent text-white py-3 rounded-xl hover:bg-blueAccent/90'}
                    font-semibold transition duration-300 ease-in-out 
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${className}`}
               onClick={onClick}
               disabled={disabled}>
               {title}
          </button>
     )
}

export default memo(Button)