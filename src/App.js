// import logo from './logo.svg';
// import './App.css';
// eslint-disable-next-line no-unused-vars
import {Footer} from "./component/footer/footer";
import {Header} from "./component/header/header";
import {Layout} from "./component/layout/layout";
import {Board} from "./component/board/board";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Card} from "./component/board/card/card";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Board/>
  },
  {
      path: "/tasks/:cardId",
      element: <Card/>
  }
  ])

function App() {
return (
    // eslint-disable-next-line react/jsx-no-undef
        <Layout>
            <Header/>
                <main>
                    <RouterProvider router={router}/>
                </main>
            <Footer/>
        </Layout>

);
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
