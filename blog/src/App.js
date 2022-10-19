import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);


  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={함수}>❤️‍🔥</span>
          {따봉}
        </h4>
        <p>10월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>10월 14일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>10월 14일 발행</p>
      </div>
    </div>
  );
}

export default App;
