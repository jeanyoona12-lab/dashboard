import React, { useEffect, useState } from 'react'
import Weather from "./components/Weather"
import Hello from "./components/Hello"
import Login from "./components/Login"


const App = () => {
  const [userName,setUserName] = useState(null);
  const handleLogin = (name)=>{
    localStorage.setItem("USER_NAME",name);
    setUserName(name);
  };
  const handleLogout =()=>{
    localStorage.setItem("USER_NAME");
    setUserName(null);
  }
  useEffect(()=>{
    //로컬 스토리지에 userName이 있는 지 체크
    const saved = localStorage.getItem("USER_NAME");
    setUserName(saved);
  },[]);
  
  return (
    <div className='app'>
      {
        userName? <Hello user={userName} onLogout={handleLogout} />  : <Login onLogin={handleLogin}/>
      }
      <Weather />
    </div>
  )
}

export default App




