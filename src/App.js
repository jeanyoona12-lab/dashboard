import { useEffect, useState } from "react";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Weather from "./components/Weather";
import Todos from "./components/Todos";
import Quote from "./components/Quote";
import "./data/app.css";
import Time from "./components/Time";


const App = () => {
    const [userName, setUserName] = useState(null);
    const [isDark, setIsDark] = useState(false);

    const handleLogin = (data) => {
        localStorage.setItem("USER_NAME", data);
        setUserName(data);
    };

    const handleLogout = () => {
        localStorage.clear();
        setUserName("");
        window.location.reload();
    };


    useEffect(() => {
        const saved = localStorage.getItem("USER_NAME");
        setUserName(saved);
    }, []);

    return (
        <>
            {/* 배경 */}
            <div className="bg-wrap">
                <video
                    className={`bg-video ${isDark ? "hidden" : "visible"}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={process.env.PUBLIC_URL + "/images/light.mp4"} />
                </video>
                <video
                    className={`bg-video ${isDark ? "visible" : "hidden"}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={process.env.PUBLIC_URL + "/images/dark.mp4"} />
                </video>
            </div>

            {/* 배경토글 버튼 */}
            <button
                type="button"
                className="toggle-btn"
                onClick={() => setIsDark((prev) => !prev)}
            >
              모드 변경
            </button>

            <div id="app">
                <Time />
                
                {userName ? (
                    <Hello user={userName} onLogout={handleLogout} />
                ) : (
                  <>
                    <Quote />
                      <Login onLogin={handleLogin} />
                  </>
                )}
                {userName && <Todos />}
                <Weather />
            </div>
        </>
    );
};

export default App;
