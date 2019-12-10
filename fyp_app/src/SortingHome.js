import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import Pathfinding from './PathfindingVisualizer/Pathfinding';

function SortingHome() {
  return (
    <div className="SortingHome">
      <Pathfinding></Pathfinding>
    </div>
  );
}

export default SortingHome;
