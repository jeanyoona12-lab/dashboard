
import React from "react";

const Hello = ({user,onLogout}) => {
    return (
        <div id="hello-page">
            <h2>안녕하세요 {user}!</h2>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    )
}

export default Hello;
