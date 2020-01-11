/**
 * A* algorithm - A* (pronounced "A-star") is a graph traversal and path search algorithm, which is often 
 * used in computer science due to its completeness, optimality, and optimal efficiency. A major practical drawback is its
 * O(b^d) space complexity because it stores all generated nodes in memory. A* is an informed search algorithm (best-first search)
 * 
 * Heavily inspired from the following resources: 
 */ 

/**
 * 
 * @param {*} nodes - All nodes
 * @param {*} start - Start node
 * @param {*} target - Target node
 * @param {*} nodesToAnimate - Nodes to animate
 * @param {*} boardArray - The board array
 * @param {*} name - 
 * @param {*} heuristic - 
 */
function astar(nodes, start, target, nodesToAnimate, boardArray, name, heuristic) {
    // If not the start node or not the target node or if start strictly equals target, return false
    if (!start || !target || start === target) {
        return false;
    }

    // Set the start distance and total distance to 0, and direction to up
    nodes[start].distance = 0;
    nodes[start].totalDistance = 0;
    nodes[start].direction = "up";

    // Let all unvisited nodes to all nodes
    let unvisitedNodes = Object.keys(nodes);

    /** 
     * While there are unvisited node, set current node to the closest node (determined through closestNode() and passing in
     * all the nodes and all unvisited nodes)
     */ 
    while (unvisitedNodes.length) {
        let currentNode = closestNode(nodes, unvisitedNodes);

        while (currentNode.status === "wall" && unvisitedNodes.length) {
            currentNode = closestNode(nodes, unvisitedNodes)
        }

        // If the current node's distance is strictly of value Infinity, return false
        if (currentNode.distance === Infinity) return false;

        // Animate the current node
        nodesToAnimate.push(currentNode);

        // Set the status of the current node to visited
        currentNode.status = "visited";

        // If the id of the current node is strictly that of the target, return a success
        if (currentNode.id === target) {
            return "success!";
        }

        // Update neighbours
        updateNeighbors(nodes, currentNode, boardArray, target, name, start, heuristic);
    }
}

/**
 * @param {*} nodes - All nodes
 * @param {*} unvisitedNodes - Currently unvisited nodes
 */
function closestNode(nodes, unvisitedNodes) {
    let currentClosest, index;
    
    // For every unvisited node...
    for (let i = 0; i < unvisitedNodes.length; i++) {
        /**
         * If not the current closest node or the current closest node's total distance is greater than that of the 
         * unvisited node's total distance at index i...
         */ 
        if (!currentClosest || currentClosest.totalDistance > nodes[unvisitedNodes[i]].totalDistance) {
            // Set the current closest to the unvisited node at index i. Set the index to index i
            currentClosest = nodes[unvisitedNodes[i]];
            index = i;
            /** 
             * Else if the current closest node's total distance is strictly equal to the unvisited node's total distance at
             * index i...
             */ 
        } else if (currentClosest.totalDistance === nodes[unvisitedNodes[i]].totalDistance) {
            // If the current closest node's heuristic distance is greater than than the unvisited node's heuristic distance...
            if (currentClosest.heuristicDistance > nodes[unvisitedNodes[i]].heuristicDistance) {
                // Set the current closest to the unvisited node at index i. Set the index to index i
                currentClosest = nodes[unvisitedNodes[i]];
                index = i;
            }
        }
    }

    unvisitedNodes.splice(index, 1);

    // Return the current closest node
    return currentClosest;
}

/**
 * @param {*} nodes - All nodes
 * @param {*} node - Singular, current node
 * @param {*} boardArray - 
 * @param {*} target - Target node
 * @param {*} name - 
 * @param {*} start - Start node
 * @param {*} heuristic - 
 */
function updateNeighbors(nodes, node, boardArray, target, name, start, heuristic) {
    let neighbors = getNeighbors(node.id, nodes, boardArray);

    // For every neighbour in neighbours
    for (let neighbor of neighbors) {
        // If the neighbour is the target
        if (target) {
            updateNode(node, nodes[neighbor], nodes[target], name, nodes, nodes[start], heuristic, boardArray);
        } else {
            updateNode(node, nodes[neighbor]);
        }
    }
}

/**
 * @param {*} currentNode - Current node
 * @param {*} targetNode - Target node
 * @param {*} actualTargetNode - 
 * @param {*} name - 
 * @param {*} nodes - All nodes
 * @param {*} actualStartNode - 
 * @param {*} heuristic - 
 * @param {*} boardArray - 
 */
function updateNode(currentNode, targetNode, actualTargetNode, name, nodes, actualStartNode, heuristic, boardArray) {
    // Get the distance of the current node and the target node
    let distance = getDistance(currentNode, targetNode);

    if (!targetNode.heuristicDistance) targetNode.heuristicDistance = manhattanDistance(targetNode, actualTargetNode);

    let distanceToCompare = currentNode.distance + targetNode.weight + distance[0];

    // if the distanceToCompare is the less than the target node's distance...
    if (distanceToCompare < targetNode.distance) {
        /**
         * Set the target node's distance to the distanceToCompare, the target node's total distance to the target node's distance
         * plus the target node's heuristic distance
         */
        targetNode.distance = distanceToCompare;
        targetNode.totalDistance = targetNode.distance + targetNode.heuristicDistance;
        targetNode.previousNode = currentNode.id;
        targetNode.path = distance[1];
        targetNode.direction = distance[2];
    }
}

/**
 * @param {*} id - 
 * @param {*} nodes -  
 * @param {*} boardArray - 
 */
function getNeighbors(id, nodes, boardArray) {
    let coordinates = id.split("-");
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    let neighbors = [];
    let potentialNeighbor;

    if (boardArray[x - 1] && boardArray[x - 1][y]) {
        potentialNeighbor = `${(x - 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
    }

    if (boardArray[x + 1] && boardArray[x + 1][y]) {
        potentialNeighbor = `${(x + 1).toString()}-${y.toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
    }

    if (boardArray[x][y - 1]) {
        potentialNeighbor = `${x.toString()}-${(y - 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
    }

    if (boardArray[x][y + 1]) {
        potentialNeighbor = `${x.toString()}-${(y + 1).toString()}`
        if (nodes[potentialNeighbor].status !== "wall") neighbors.push(potentialNeighbor);
    }

    return neighbors;
}

/**
 * @param {*} nodeOne - 
 * @param {*} nodeTwo - 
 */
function getDistance(nodeOne, nodeTwo) {
    let currentCoordinates = nodeOne.id.split("-");
    let targetCoordinates = nodeTwo.id.split("-");
    let x1 = parseInt(currentCoordinates[0]);
    let y1 = parseInt(currentCoordinates[1]);
    let x2 = parseInt(targetCoordinates[0]);
    let y2 = parseInt(targetCoordinates[1]);

    if (x2 < x1 && y1 === y2) {
        if (nodeOne.direction === "up") {
            return [1, ["f"], "up"];
        } else if (nodeOne.direction === "right") {
            return [2, ["l", "f"], "up"];
        } else if (nodeOne.direction === "left") {
            return [2, ["r", "f"], "up"];
        } else if (nodeOne.direction === "down") {
            return [3, ["r", "r", "f"], "up"];
        } else if (nodeOne.direction === "up-right") {
            return [1.5, null, "up"];
        } else if (nodeOne.direction === "down-right") {
            return [2.5, null, "up"];
        } else if (nodeOne.direction === "up-left") {
            return [1.5, null, "up"];
        } else if (nodeOne.direction === "down-left") {
            return [2.5, null, "up"];
        }
    } else if (x2 > x1 && y1 === y2) {
        if (nodeOne.direction === "up") {
            return [3, ["r", "r", "f"], "down"];
        } else if (nodeOne.direction === "right") {
            return [2, ["r", "f"], "down"];
        } else if (nodeOne.direction === "left") {
            return [2, ["l", "f"], "down"];
        } else if (nodeOne.direction === "down") {
            return [1, ["f"], "down"];
        } else if (nodeOne.direction === "up-right") {
            return [2.5, null, "down"];
        } else if (nodeOne.direction === "down-right") {
            return [1.5, null, "down"];
        } else if (nodeOne.direction === "up-left") {
            return [2.5, null, "down"];
        } else if (nodeOne.direction === "down-left") {
            return [1.5, null, "down"];
        }
    }

    if (y2 < y1 && x1 === x2) {
        if (nodeOne.direction === "up") {
            return [2, ["l", "f"], "left"];
        } else if (nodeOne.direction === "right") {
            return [3, ["l", "l", "f"], "left"];
        } else if (nodeOne.direction === "left") {
            return [1, ["f"], "left"];
        } else if (nodeOne.direction === "down") {
            return [2, ["r", "f"], "left"];
        } else if (nodeOne.direction === "up-right") {
            return [2.5, null, "left"];
        } else if (nodeOne.direction === "down-right") {
            return [2.5, null, "left"];
        } else if (nodeOne.direction === "up-left") {
            return [1.5, null, "left"];
        } else if (nodeOne.direction === "down-left") {
            return [1.5, null, "left"];
        }
    } else if (y2 > y1 && x1 === x2) {
        if (nodeOne.direction === "up") {
            return [2, ["r", "f"], "right"];
        } else if (nodeOne.direction === "right") {
            return [1, ["f"], "right"];
        } else if (nodeOne.direction === "left") {
            return [3, ["r", "r", "f"], "right"];
        } else if (nodeOne.direction === "down") {
            return [2, ["l", "f"], "right"];
        } else if (nodeOne.direction === "up-right") {
            return [1.5, null, "right"];
        } else if (nodeOne.direction === "down-right") {
            return [1.5, null, "right"];
        } else if (nodeOne.direction === "up-left") {
            return [2.5, null, "right"];
        } else if (nodeOne.direction === "down-left") {
            return [2.5, null, "right"];
        }
    }
}

/**
 * @param {*} nodeOne - 
 * @param {*} nodeTwo - 
 */
function manhattanDistance(nodeOne, nodeTwo) {
    let nodeOneCoordinates = nodeOne.id.split("-").map(ele => parseInt(ele));
    let nodeTwoCoordinates = nodeTwo.id.split("-").map(ele => parseInt(ele));
    let xOne = nodeOneCoordinates[0];
    let xTwo = nodeTwoCoordinates[0];
    let yOne = nodeOneCoordinates[1];
    let yTwo = nodeTwoCoordinates[1];

    let xChange = Math.abs(xOne - xTwo);
    let yChange = Math.abs(yOne - yTwo);

    return (xChange + yChange);
}

module.exports = astar;