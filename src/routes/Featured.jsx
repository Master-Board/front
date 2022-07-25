import React from "react";

export default  (props) => {


    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `#`,// 대문사진
            backgroundColor: '#111'
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name" style={{color: '#fff'}}>추천 게임 제목</div>
                    <div className="featured-info">
                        <div className="featured-points"> N points / 평점</div> 
                        <div className="featured-seasons" style={{color: '#c44'}}> n명 / 인원수</div>
                    </div>
                    <div className="featured-description">안녕하세요? 게임설명 어쩌구저쩌구</div>
                    <div className="featured-buttons">
                        <a className="featured-playButton" href="/">▶ Play</a>
                        <a className="featured-howtoButton" href="/">How to</a>
                    </div>
                </div>
            </div>
        </section>
    );
}