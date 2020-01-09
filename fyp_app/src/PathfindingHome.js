import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import Pathfinding from './PathfindingVisualizer/Pathfinding';
import ImageUpload from './firebase/upload';

function PathfindingHome() {
  return (
    <div className="PathfindingHome">
      {/* <Pathfinding></Pathfinding> */}
      <ImageUpload></ImageUpload>
    </div>
  );
}

export default PathfindingHome;
