/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [title,changeTitle] = useState(['남자크토 추천','강남 맛집','파이썬']);
  let posts = '가나다라마';
  let color1 = {color : 'blue' , fontSize : '30px'};
  let [modal, setModal] = useState(false);
  let [sliceTitle,setSliceTitle] = useState(0);
  let [addTitle,setAddTitle] = useState('');
  const onIncrease = () => {
    changeTitle(['바뀐제목','2','3']);
  }
  
  let arr2 = [];
  title.map(function(){
    arr2.push(0);
  })
  let [count,plusCount] = useState(arr2);


  function plusC(index){
    let arr = [...count] ;
    arr[index] = count[index]+1;
    plusCount(arr);
  }

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

  function enterTitle(){
    let newArray = [...title] ;
    newArray.push(addTitle);
    changeTitle(newArray);
  }

  return (
    <div className="App">
     <div className="black-nav">
      <div>개발 Blog</div>
      <button onClick={sort}>정렬</button>
     </div>

     {
      title.map(function(a,i){
        return (
          <div className ="list">
      <h3 onClick={()=>{modal==true?sliceTitle==i?setModal(false):'' :setModal(true);setSliceTitle(i) }}>{title[i]}</h3><span onClick={()=>{plusC(i)} }>★</span> {count[i]}
      <p>2월 18일 발행</p>

      <button onClick={onIncrease}>+1</button>
      <hr/>
     </div>
        )
      })
     }
     {
      modal == true ?  <Modal title = {title} titleIndex = {sliceTitle} se={cTitle}/> : null
     }
      <input type="text" id="message" onChange={(e)=>{setAddTitle(e.target.value);}}></input><button onClick={enterTitle}>글 발행</button>
    </div>
  );
}
//Component 
function Modal(props){

  return (
    <div className="modal">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.se}>버튼</button>
    </div>
  )
}

export default App;
