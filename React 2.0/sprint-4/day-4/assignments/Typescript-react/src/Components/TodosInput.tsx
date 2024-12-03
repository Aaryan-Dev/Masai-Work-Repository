import React, { useState } from 'react'

interface ITodosInputProps{

    handleAdd: ( value: string ) => void;

}

const TodosInput = ({handleAdd}: ITodosInputProps) => {
  
    const [text, setText] = useState<string>("");

    const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }


    const clickHandler = () => {
        if (text !== "") {
            handleAdd(text);
        }
    }

    return (
        <div>
            
            <input type="text" value={text} onChange={changeHandler} />
            <button onClick= {clickHandler}> Add</button>

    </div>
  )
}

export default TodosInput