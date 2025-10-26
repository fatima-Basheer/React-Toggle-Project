import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toggle from './Toggle'
import './App.css'

function App() {
   
    // const [fruit, setFruit] = useState("Apple")
    //let name;
      // function operation(a,b,op){
      //        if(op=="+"){
      //          return a+b;
      //        }else if(op=="-"){
      //           return a-b;
      //        }
      // }
      // const userObj={
      //   name:"fatima",
      //   email:"fatima@dev.com",
      // }

      // function printHello(arg){
      //   alert(arg);
      // }
    // const changeFruit=( )=>{
    //   setFruit("Banana");
    // }

  return (
    <>

       {/* {name?name:<h3>Dear</h3>}
      <h1>{operation(5,15,'-')}</h1>
      <button onClick={( )=>printHello("hello Maryum")}>hello</button>
      {userObj.name} */}
      {/* <h1>{fruit}</h1>
      <button onClick={changeFruit}>Change Fruit Name</button> */}
      <Toggle></Toggle>
    </>
  )
}

export default App
