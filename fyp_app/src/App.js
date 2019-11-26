import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pathfinding from './PathfindingVisualizer/PathfindingVisualizer';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";

// Pages
// import MainPage from "./pages"; // index.jsx will be automatically imported 
// import NotFoundPage from './pages/404';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/" component={MainPage} />
//           <Route exact path="/404" component={NotFoundPage} />
//           <Redirect to="/404" />
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;

function App() {
  return (
    <div className = "App">
      <Pathfinding></Pathfinding>
    </div>
  );
}

export default App;