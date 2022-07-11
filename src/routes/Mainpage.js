import React, { useEffect, useState } from "react";
import Tmdb from "../DB.js";
import Row from "./Row.js";
import Featured from "./Featured.js";
import Header from "./Header.js";

function Mainpage() {
  const [gameList, setGameList] = useState([]);
  const [blackHeader, setBalckHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setGameList(list);
    };

    loadAll();
  }, []);

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

  return (
    <div className="page">
      <Header black={blackHeader} />

      {/* {featuredData &&
                <Featured />
            } */}

      <Featured />

      <section className="lists">
        {gameList.map((item, key) => (
          <Row
            key={key}
            title={item.title}
            items={item.items}
            people={item.people}
          />
        ))}
      </section>

      {/* {List.length <= 0 &&
                <div className="loading">
                    <img src="#" alt=""/>
                </div>
            } */}
    </div>
  );
}

export default Mainpage;
