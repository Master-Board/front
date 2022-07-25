import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default ({ title, items, people }) => {
  const [scrollX, setScrollX] = useState(0);
  const [roomSearchModal, setRoomSearchModal] = useState(false);
  const [roomMakeModal, setRoomMakeModal] = useState(false);
  const SearchModalhandleClose = () => setRoomSearchModal(false);
  const SearchModalhandleShow = () => setRoomSearchModal(true);
  const makeModalhandleClose = () => setRoomMakeModal(false);
  const makeModalhandleShow = () => setRoomMakeModal(true);

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
    <div className="Row" style={{backgroundColor: '#111'}}>
      <h2 style={{color: '#fff'}} >{title}</h2>
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
          
          <div>
            <button style={{display: 'block'}} variant="primary" onClick={SearchModalhandleShow}>방 만들기</button>
            <Modal show={roomSearchModal} onHide={SearchModalhandleClose}>
              <Modal.Header closeButton>
                <Modal.Title>방 번호를 입력하세요</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={SearchModalhandleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={SearchModalhandleClose}>
                  Create!
                </Button>
              </Modal.Footer>
            </Modal>
            <button style={{display: 'block'}} variant="primary" onClick={makeModalhandleShow}>방 찾기</button>
            <Modal show={roomMakeModal} onHide={makeModalhandleClose}>
              <Modal.Header closeButton>
                <Modal.Title>방 번호를 입력하세요</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={makeModalhandleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={makeModalhandleClose}>
                  Create!
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {items.results?.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="Row-item">
                <img src="#" height={"300px"}/>
                <div style={{color: '#fff'}}>{items.results[key].number +  "  / " + people}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
