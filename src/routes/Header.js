import React from "react";

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/mainpage">
                    <img src="#" alt="페이지 로고/홈버튼"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/mainpage">
                    <img src="#" alt="User"/>
                </a>
            </div>
        </header>
    );
};