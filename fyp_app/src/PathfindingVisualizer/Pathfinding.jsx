import React, { Component } from 'react';
import Node from './Node/Node';

import './Pathfinding.css';

/* 
 * Defines starting values for the node that searches for the target (START_ROW, START_COLUMN) and
 * finishing values for the target itself (FINISH_ROW, FINISH_COLUMN)
 */

const START_ROW = 5;
const START_COLUMN = 10;

const FINISH_ROW = 15;
const FINISH_COLUMN = 50;

const grid = getInitialGrid();

export default class Pathfinding extends Component {
    constructor() {
        super();

        this.state = {
            grid = [],
            mousePressed = false
        };
    }

    initialiseComponent() {
        // grid;

        this.setState ({
            grid
        });
    }

    // Handles a mouse down event. Passes in the row and column the mouse down was detected
    mouseDown(row, column) {
        const newGrid = getNewGridWithWallToggled(this.state.grid, row, column);

        this.setState ({
            grid: newGrid,
            mousePressed = true
        }); 
    }

    mouseEnter(row, column) {
        if (this.state.mousePressed) {
            const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
            this.setState ({
                grid: newGrid
            });
        } else {
            return;
        }
    }

    mouseUp() {
        this.setState ({
            mousePressed: false
        });
    }

    // The 'main' method of react
    render() {
        <h3>
            {/* Button that will visualize an algorithm */}
            <button /* onClick = {() =>} */>
                Visualize
            </button>
        </h3>
    }
}