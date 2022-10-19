/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [title,changeTitle] = useState(['312','123','212']);
  let posts = '가나다라마';
  let color1 = {color : 'blue' , fontSize : '30px'};
  const onIncrease = () => {
    changeTitle(['바뀐제목','2','3']);
  }
  let [count,plusCount] = useState(0);
  function cTitle(){
    let newArray = [...title] ;
    newArray[0] = '여자코트추천';
    changeTitle(newArray);
  }

  function sort(){
    let newArray = [...title] ;
    newArray.sort();
    changeTitle(newArray);
  }
  return (
    <div className="App">
     <div className="black-nav">
      <div>개발 Blog</div>
      <button onClick={sort}>정렬</button>
     </div>
     <div className ="list">
      <h3>{title[0]} <span onClick={()=>{plusCount(count+1)} }>★</span> {count}</h3>
      <p>2월 18일 발행</p>
      <button onClick={cTitle}>+1</button>
      <hr/>
     </div>
     <div className ="list">
      <h3>{title[1]}</h3>
      <p>2월 18일 발행</p>
      <button onClick={onIncrease}>+1</button>
      <hr/>
     </div>
     <div className ="list">
      <h3>{title[2]}</h3>
      <p>2월 18일 발행</p>
      <button onClick={onIncrease}>+1</button>
      <hr/>
     </div>
      <Modal></Modal>
    </div>
  );
}
//Component 
function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
