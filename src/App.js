import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

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
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy3 = [...따봉];
                  copy3[i] = copy3[i] + 1;
                  따봉변경(copy3);
                }}
              >
                ❤️‍🔥
              </span>
              {따봉[i]}
            </h4>
            <p>10월 14일 발행</p>
          </div>
        );
      })}
      {modal ? <Modal 글제목={글제목} 글제목변경={글제목변경} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
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
