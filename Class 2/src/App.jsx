import React, { useState } from 'react'
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

const App = () => {
  // const name = 'Ali'

  // const isLoggedIn = false;
  // if (isLoggedIn) {
  //   return <Dashboard />;
  // }
  // else{
  //   return <Login />;
  // }
  
  // isLoggedIn ? <Dashboard /> : <Login />;
  const [count , setCount ] = useState(0);
  // const [text , setText ] = useState("");
  // const [textCount , setTextCount ] = useState(0);
  function Increase(){
    setCount(count + 1)
  }
  // function Decrease(){
  //   setCount(count -1 );
  //   if (count <= 0) {
  //     setCount(0)
  //   }
  // }
  // function Reset(){
  //   setCount(0)
  // }

  // function textChange(e){
  //   setText(e.target.value);
  //   //add the value count functionality here
  //   setTextCount(e.target.value.length);
  // }
  return (
    // <div className='bg-gray-800 h-screen flex items-center justify-center flex-col [&>p]:text-red-500'>
    //   <h1 className='text-amber-700'>App Component</h1> 
    //   <p >Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Lorem ipsum dolor sit.</p>
    //   <p>Your Name is : {name}</p>
    //   <p>2 + 2 = {2 + 2}</p>
    //   </div>
    <div className='flex h-screen items-center justify-center flex-col gap-4 bg-amber-500' >
<h1>{count}</h1>
<div className='flex gap-1 '>
  <button className='border-sky-900 border-2 rounded-2xl p-2 cursor-pointer' onClick={Increase}>Increase </button>
  {/* <button className='border-sky-900 border-2 rounded-2xl p-2 cursor-pointer' onClick={Decrease}>Decrease </button>
  <button className='border-sky-900 border-2 rounded-2xl p-2 cursor-pointer' onClick={Reset}>Reset </button> */}
</div>
<div><input type="text"  onChange={textChange} className='border-1' />
<p>{text}</p>
<p>{textCount}</p>
</div>
    </div>
  )
}

export default App;
