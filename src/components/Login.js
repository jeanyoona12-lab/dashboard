import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [user, setUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // ★ 이게 실행되면 리셋 안 됨
        onLogin(user);
    };

    return (
        <form id="login-page" onSubmit={handleSubmit}>
            <h2>이름을 입력하세요</h2>
            <input
                type="text"
                value={user}
                onChange={(e) => {
                    setUser(e.target.value);
                }}
            />
            <button type="submit">입장하기</button>
        </form>
    );
};

export default Login;
