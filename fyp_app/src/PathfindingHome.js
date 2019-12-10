import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import Pathfinding from './PathfindingVisualizer/Pathfinding';

function PathfindingHome() {
  return (
    <div className="PathfindingHome">
      <Pathfinding></Pathfinding>
    </div>
  );
}

export default PathfindingHome;
