import React, { useEffect, useState } from "react";
import Tmdb from "../DB.js";
import Row from "./Row.jsx";
import Featured from "./Featured.jsx";
import Header from "./Header.jsx";
import userEvent from '@testing-library/user-event';
import { useSelector, useDispatch } from 'react-redux';

function Mainpage(props) {

  const [blackHeader, setBalckHeader] = useState(false);
  const [featuredData, setFeaturedData] = useState("");

  useEffect(() => {
    let randomChoosen = Math.floor(Math.random() * (props.games.length));
    let choosen = props.games[randomChoosen];
    setFeaturedData(choosen);
  })

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBalckHeader(true);
      } else {
        setBalckHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const LogoutFunc = () => {
    console.log("로그아웃");
  }

  console.log(featuredData);

  return (
    <div className="page">
      <Header black={blackHeader} user={props.user} setUser={props.setUser} />

      {/* {featuredData &&
                <Featured />
            } */}

      <Featured user={props.user} setUser={props.setUser} />

      <section className="lists">
        {props.games && props.games.map((item, key) => (
          <Row
            key={key}
            title={item.title}
            items={item.items}
            people={item.people}
            user={props.user} 
            setUser={props.setUser}
          />
        ))}
      </section>

      <button onClick={() => LogoutFunc()}>로그아웃</button>

      {/* {List.length <= 0 &&
                <div className="loading">
                    <img src="#" alt=""/>
                </div>
            } */}
    </div>
  );
}

export default Mainpage;
