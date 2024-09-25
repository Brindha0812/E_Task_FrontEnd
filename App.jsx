// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// // import Card from './components/card/card';
// // import Sidebar from './components/sidebar/sidebar';
// // import Emp from './components/employee/emp';
// // import Edit from './components/edit/edit';
// // import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
// import Navbar from './components/home/Navbar';
// import TicTacToe from './components/game/Game';
// import BlogPage from './components/blog/blog';
// function App() {
//   return (
//     <>
//       <Router>
//         {/* <Sidebar /> */}
//         <div className="main-content">
//           {/* <Breadcrumbs /> */}
//           <Navbar />
//           {/* <BlogPage/> */}
//           <Routes>
//             {/* <Route path="/" element={<Card />} /> */}
//             <Route path="/home" element={<Navbar/>}/>
//             <Route path="/tictactoe" element={<TicTacToe/>} />
//             {/* <Route path="/employee" element={<Emp />} /> */}
//             {/* <Route path="/edit" element={<Edit />} /> */}
//             {/* <Route path="/card" element={<Card />} /> */}
//             <Route path="/blog" element={<BlogPage/>} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/home/Navbar';
import TicTacToe from './components/game/Game';
import BlogPage from './components/blog/blog';
function App() {
  return (
    <Router>
      {/* <div className="app-container">
        <Navbar />
        <div className="main-content"> */}
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Navbar />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        {/* </div> */}
      {/* </div> */}
    </Router>
  );
}


export default App;