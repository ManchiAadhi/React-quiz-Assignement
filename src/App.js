import './App.css';
import { useState } from "react"
function App() {
  const [num, setNum] = useState(0)
  const[score,setScore]=useState(0)
  return (
    <div id="maincontainer" >
      <div id="childcontainer" >
        
        { (num===0)?<>
        <div id="question">
                <h1 id='para' > What is the captal city of India?</h1>
        </div>

        <div id="options" >
          <button onClick={() => { setNum(num + 1) }} placeholder="mumbai">mumbai</button>
          <button onClick={() => { setNum(num + 1);setScore(score+1)  }} >Delhi</button> 
          <button onClick={() => { setNum(num + 1) }} placeholder="goa">goa</button>
          <button onClick={() => { setNum(num + 1) }} placeholder="hyderabad">huderabad</button>
        </div></>:<></>}
        { (num===1)?<>
        <div id="question">
        <h1 id='para' > Currrent NAS of India?</h1>
        </div>

        <div id="options" >
          <button onClick={() => { setNum(num + 1) }} placeholder=" M. K. Narayanan"> M. K. Narayanan</button> 
          <button onClick={() => { setNum(num + 1) }} placeholder="Ravindra Koushik ">Ravindra Koushik </button>
          <button onClick={() => { setNum(num + 1);setScore(score+1) }} placeholder="AJit Dovel "> AJit Dovel </button>
          <button onClick={() => { setNum(num + 1) }} placeholder="Ashoka"  >Ashoka</button>
        </div></>:<></>}
        { (num===2)?<>
        <div id="question">
         <h1 id='para' > who is Black Tiger?</h1>
        </div>

        <div id="options" >
          <button onClick={() => { setNum(num + 1) }} placeholder="kiran biede" >kiran biede</button>
          <button onClick={() => { setNum(num + 1) }} placeholder=" M. K. Narayanan"  >M. K. Narayanan</button>
          <button onClick={() => { setNum(num + 1) }} placeholder="AJit Dovel"  >AJit Dovel</button>
          <button onClick={() => { setNum(num + 1) ;setScore(score+1) }} placeholder="Ravindra Koushik" >Ravindra Koushiks</button>
        </div></>:<></>}
        { (num===3)?<>
        <div id="question">
         <h1 id='para' > Full form of RAW?</h1>
        </div>

        <div id="options" >
          <button onClick={() => { setNum(num + 1) }} placeholder="roses are red" >roses are red</button>
          <button onClick={() => { setNum(num + 1) }} placeholder="rings and water"  >rings and water</button>
          <button onClick={() => { setNum(num + 1) }} placeholder="run and win"  >run and win</button>
          <button onClick={() => { setNum(num + 1);setScore(score+1) }} placeholder="Research and Analysis Wing"  >Research and Analysis Wing</button>
        </div></>:<></>}


        { (num===4)?<h1 id='score'>
           your score is {score}

        </h1>:<></>}



      </div>
    </div>
  );
}

export default App;
