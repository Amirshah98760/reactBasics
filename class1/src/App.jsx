// import React , { useState , useEffect } from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Login} from './Pages/Login';
import {SignUp} from './Pages/SignUp';
import Navbar from './components/Navbar';
const App = () => {
  // const [posts, setPosts] =  useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   const fetchPosts = async () =>{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await res.json();
  //      setPosts(data);
  //      setLoading(false);
      
  //   }
  // })
  
  // const userData =[
  //   {
  //     id:1, 
  //     name:'Amir shah',
  //     age:'25',
  //     desc:'Hello I am Amir shah from Peshawar Pakistan and i am a backend developer'   
  //   },
  //     {
  //     id:2, 
  //     name:'Ali Khan',
  //     age:'30',
  //     desc:'Hello I am Ali Khan from Lahore Pakistan and i am a frontend developer'

  //     },
  //     {
  //     id:3, 
  //     name:'Ayesha',
  //     age:'28',
  //     desc:'Hello I am Ayesha from Karachi Pakistan and i am a fullstack developer'
  //     },
  //     {
  //     id:4, 
  //     name:'Sara',
  //     age:'22',
  //     desc:'Hello I am Sara from Islamabad Pakistan and i am a mobile app developer'
  //     },
  //     {
  //     id:5, 
  //     name:'Omar',
  //     age:'27',
  //     desc:'Hello I am Omar from Quetta Pakistan and i am a DevOps engineer'
  //     },
  //     {
  //     id:6, 
  //     name:'Zainab',
  //     age:'24',
  //     desc:'Hello I am Zainab from Multan Pakistan and i am a data scientist'
  //     },
  //     {

  //     id:7, 
  //     name:'Hassan',
  //     age:'29',
  //     desc:'Hello I am Hassan from Faisalabad Pakistan and i am a machine learning engineer'
  //     },
  //     {
  //     id:8, 
  //     name:'Fatima',
  //     age:'26',
  //     desc:'Hello I am Fatima from Sialkot Pakistan and i am a software tester'
  //     },
  //     {
  //     id:9, 
  //     name:'Bilal',
  //     age:'31',
  //     desc:'Hello I am Bilal from Gujranwala Pakistan and i am a system analyst'
  //     },
  //     {

  //     id:10, 
  //     name:'Nadia',
  //     age:'23',
  //     desc:'Hello I am Nadia from Hyderabad Pakistan and i am a network engineer'
  //     },
  //     {

  //     id:11, 
  //     name:'Raza',
  //     age:'32',
  //     desc:'Hello I am Raza from Sukkur Pakistan and i am a cybersecurity expert' 
  //     }
  // ]
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
    {/* <h1 style={{textAlign: 'center', margin: '20px 0'}}>User Information Cards</h1>
    <div className='cards'>
      {userData.map((user, index)=>{
        return(
          <div key={user.id} className='card'>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>{user.desc}</p>
          </div>
        )
      })}
    </div> */}


    </>
  )
}

export default App