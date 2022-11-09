import React, { useState } from 'react'
import Button from './Button';
import Header from './Header';

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    
    setCount(count + value)

  }

  return (
    <div>

      <Header/>
      
      <Header>

        <div>child 1</div>
        <div>child 2</div>
        <div>child 3</div>

      </Header>
      <Header  lable={`Counter ${count}`} />
      
      <Button buttonText='Add'  handleClick= {() => handleClick(1)} />
      <Button  buttonText='Reduce'  handleClick= {() => handleClick(-1)}  />


    </div>
  )
}

export default Counter