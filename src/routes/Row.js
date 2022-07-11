import React, { useState } from "react";

export default ({ title, items, people }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results?.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };
  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-left" onClick={handleLeftArrow}>
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-left.png" />
      </div>
      <div className="Row-right" onClick={handleRightArrow}>
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-right.png" />
      </div>

      <div className="Row-listarea">
        <div
          className="Row-list"
          style={{
            marginLeft: scrollX,
          }}
        > 
          <img width={"300px"} height={"300px"} />
          
          <img width={"150px"} height={"300px"} />

          {items.results?.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="Row-item">
                <img src="#" height={"300px"}/>
                <div>{items.results[key].number +  "  / " + people}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
