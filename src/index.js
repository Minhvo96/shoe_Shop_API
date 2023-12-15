import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import showProduct from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import * as bootstrap from 'bootstrap';
import ShoesRender from './components/Shoes';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
                <ShoesRender/>
            </BrowserRouter>);

// const c0623s = [
//     {
//         id: 1,
//         name: "Huy",
//         description: "Đẹp trai",
//     },
//     {
//         id: 2,
//         name: "Tuấn",
//         description: "Thông minh",
//     },
//     {
//         id: 3,
//         name: "Hiếu",
//         description: "Đào hoa",
//     },
// ];

//   const NameList = c0623s.map((person) => {
//       return (
//         <>
//         <h3>Person</h3>
//         <h5>{person.id}</h5>
//         <h5>{person.name}</h5>
//         <h5>{person.description}</h5>
//         </>
//       )
//   }); 

// function NameList() {
//     return (
//         <div>
//             {
//                 c0623s.map((item) => {
//                     return (
//                         <>
//                             <h2>{item.name}</h2>
//                             <p>{item.description}</p>
//                         </>

//                     )
//                 })
//             }

//         </div>
//     )

// };


// function NameList2() {
//     return (
//         c0623s.map((person) =>
//             <Person key={person.id}
//                     {...person}
//             />   
//         )
//     )
// }

// function Person(props) {
//     return (
//         <>
//             <h5>{props.id}</h5>
//             <h5>{props.name}</h5>
//             <h5>{props.description}</h5>
//         </>
//     )
// }

// const roots = ReactDOM.createRoot(document.getElementById('roots'));
// roots.render(<NameList2 />);
