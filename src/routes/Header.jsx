import React from "react";

export default ({black}, props) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/mainpage">
                    <img src="img/logo.PNG" alt="페이지 로고/홈버튼"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/mainpage">
                    <img src="img/user.png" alt="User"/>
                </a>
            </div>
        </header>
    );
};