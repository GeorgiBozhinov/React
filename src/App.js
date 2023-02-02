import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';
import indexService from "./services/IndexService";


function App() {

    const message = indexService.getMessage().json;
    console.log("The message is: " + message);
    // const paths = useState([
    //     {name: "Home", p: "/"},
    //     {name: "About", p: "about"},
    //     {name: "Blog", p: "blog"},
    //     {name: "Products", p: "products"},
    // ])

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/blogs' component={Blog}/>
                <Route path='/products' component={Products}/>
            </Routes>
        </Router>
    );
}

export default App;












// import React from 'react'
// import './App.css'
// //import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
// import Products from './pages/Products'
// import Blog from './pages/Blog'
// import {useState} from 'react';
// import IndexComponent from './components/index/IndexComponent';
//
//
//
// function App() {
//   const [emps,setEmps]=useState([
//     {name:"Raja",experience:"10+ Years"},
//     {name:"Mano",experience:"2 Years"},
//     {name:"Tom",experience:"5+ Years"},
//   ])
//
//   //const [emps,setEmps] = IndexComponent
//
//   return (
//     <div className = "App" >
//        {emps.map( (emp,index)=>
//        (
//           <div key={index}>
//               <h3>{emp.name}</h3>
//               <p>{emp.experience}</p>
//           </div>
//        )
//        )}
//
//
//      </div>
//     // <Router>
//     //   <Header />
//     //     <Routes>
//     //             {
//     //             /* <Route path="/" element={<Home />} />
//     //             <Route path="/about" element={<About />} />
//     //             <Route path="/products" element={<Products />} />
//     //             <Route path="/blog" element={<Blog />} /> */
//     //             {itemList}
//     //             }
//     //     </Routes>
//     // </Router>
//   )
// }
// export default App