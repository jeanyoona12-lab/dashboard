import { useState } from "react";

const Login = ({ onLogin }) => {
    const [user, setUser] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); //이미 있는 기능 실행 방지
        onLogin(user);
    };
        return (
            <form id="login-page" onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <input
                        className="input-text"
                        type="text"
                        value={user}
                        placeholder="이름을 입력하세요"
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                    />
                    <button type="submit" className="btn">입장하기</button>
                </div>
            </form>
        );
};

export default Login;
