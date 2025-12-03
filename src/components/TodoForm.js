import React, { useState } from 'react'

const TodoForm = ({onSave}) => {
    const [task,setTask] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault(); //기존 기능 방지
        onSave(task);
        setTask('');
    }
    // const handleKeyDown =(e) =>{
    //     if( e.code === 'keyA'){
    //         setView(task); //전송이 되면 보여지는 입력값 저장
    //         setTask('');
    //     }
    // }
    return (
    <div id="todo-form">
        <p>오늘의 할 일은 무엇인가요?</p>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="텍스트를 입력하세요"
            className="todo-input"
            value={task}
            type="text"
            onChange={(e)=>{setTask(e.target.value)}}
            // onKeyDown={handleKeyDown}
            />
        </form>
        
    </div>
    )
}

export default TodoForm