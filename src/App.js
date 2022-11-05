import "./App.css";
import { useState } from "react";
import _ from "lodash";

function App() {
  let [글, 글변경] = useState([
    { 제목: "남자 코트 추천", 따봉수: 0 },
    { 제목: "강남 우동맛집", 따봉수: 0 },
    { 제목: "파이썬 독학", 따봉수: 0 },
  ]);

  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy2 = 글.sort((a, b) => a.제목 - b.제목);
          글변경(copy2);
        }}
      >
        가나다 순 정렬
      </button>
      <button
        onClick={() => {
          const copy = _.cloneDeep(글);
          copy[0].제목 = "여자 코트 추천";
          글변경(copy);
        }}
      >
        수정
      </button>
      {글.map(function (item, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(modal ? false : true);
                setModalTitle(i);
              }}
            >
              {item.제목}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const copy = _.cloneDeep(글);
                  copy[i].따봉수++;
                  글변경(copy);
                }}
              >
                ❤️‍🔥
              </span>
              {글[i].따봉수}
            </h4>
            <button
              onClick={() => {
                let copy4 = _.cloneDeep(글);
                copy4.splice(i, 1);
                글변경(copy4);
              }}
            >
              글 삭제
            </button>
            <p>10월 14일 발행</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      {/* 게시글 생성 (unshift()위에서 부터 요소 생성 ) */}
      <button
        onClick={() => {
          if (입력값.length === 0) {
            return alert("제목을 입력하세요");
          }
          let copy5 = _.cloneDeep(글);
          copy5.unshift({ 제목: 입력값, 따봉수: 0 });
          글변경(copy5);
        }}
      >
        글 발행
      </button>
      {modal ? <Modal 글={글} modalTitle={modalTitle} 글변경={글변경} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글[props.modalTitle].제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글변경([
            { 제목: "남자 코트 추천", 따봉수: 0 },
            { 제목: "강남 우동맛집", 따봉수: 0 },
            { 제목: "파이썬 독학", 따봉수: 0 },
          ]);
        }}
      >
        글 수정
      </button>
    </div>
  );
};

export default App;
