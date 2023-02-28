import React from 'react'

interface ButtonProps {
    text: string,
    onClick?: () => void,
    role?: string
}

const Button = ({text, onClick, role}: ButtonProps) => {
  return (
    <button onClick={onClick} role={role}>{text}</button>
  )
}

export default Button;