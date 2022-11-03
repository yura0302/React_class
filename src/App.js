import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0]);
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
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}
      >
        가나다 순 정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        수정
      </button>
      {글제목.map(function (item, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(modal ? false : true);
                setModalTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  let copy3 = [...따봉];
                  copy3[i] = copy3[i] + 1;
                  e.stopPropagation();
                  따봉변경(copy3);
                }}
              >
                ❤️‍🔥
              </span>
              {따봉[i]}
            </h4>
            <button
              onClick={() => {
                let copy4 = [...글제목];
                copy4.splice(i, 1);
                글제목변경(copy4);
              }}
            >
              글 삭제
            </button>
            <p>10월 14일 발행</p>
          </div>
        );
      })}

      {/* 게시글 생성  */}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          글제목변경(글제목.concat(입력값));
          console.log(글제목);
        }}
      >
        글 발행
      </button>
      {modal ? (
        <Modal
          글제목={글제목}
          modalTitle={modalTitle}
          글제목변경={글제목변경}
        />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
        }}
      >
        글 수정
      </button>
    </div>
  );
};

export default App;
