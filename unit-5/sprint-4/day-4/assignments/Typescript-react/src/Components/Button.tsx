import React from 'react'

interface IButtonProps{
  buttonText?: string,
  handleClick: () =>void
}


// lable, onClick
const Button = (props: IButtonProps) => {
  
  const { buttonText, handleClick } = props;


  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

export default Button