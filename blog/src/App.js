

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post= '강남 우동 맛집';
  // 잠깐 저장할 땐 변수 사용 let, var ,const 
  // state
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState(0);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
        </div>

        <button>가나다순 정렬</button>

          <button onClick={()=>{
            let copy= [...글제목];
            copy[0]='여자 코트 추천';
            글제목변경(copy);
          }}>글 수정</button>

        <div className='list'>
          <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>💝</span>{따봉}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
        </div>
  );
}

export default App;
