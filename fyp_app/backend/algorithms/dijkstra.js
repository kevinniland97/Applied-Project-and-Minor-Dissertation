// Dijkstra' algorithm written in JavaScript
function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbours(node, grid) {
    const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);

    for (const neighbour of unvisitedNeighbours) {
        neighbour.distance = node.distance + 1;
        neighbour.previousNode = node;
    }
}

function getUnvisitedNeighbours(node, grid) {
    const neighbours = [];
    const {column, row} = node;

    if (row > 0) {
        neighbours.push(grid[row - 1][column]);
    }

    if (row < grid.length - 1) {
        neighbours.push(grid[row + 1][column]);
    }

    if (column > 0) {
        neighbours.push(grid[row][column - 1]);
    }

    if (column < grid[0].length - 1) {
        neighbours.push(grid[row][column + 1]);
    }

    return neighbours.filter(neighbour => !neighbour.isVisited);
}

function getAllNodes(grid) {
    const nodes = [];

    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }

    return nodes;
}

// Backtracks from the finishNode to find the shortest path. Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    
    return nodesInShortestPathOrder;
}

export function dijkstra(grid, startNode, finishNode) {
    // Array of the visited nodes in the order in which they were visited
    const visitedNodes = [];
    const unvisitedNodes = getAllNodes(grid);

    startNode.distance = 0;

    // '!!' coerces something to a boolean. If it was a falsey (0, null, undefined, etc. ), it will be false. Otherwise, it
    // will be true
    // https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);

        const closestNode = unvisitedNodes.shift();

        // Checks for a 'wall'. If we encounter one, skip it using continue. The reasoning behind using continue is that continue
        // "jumps over" one iteration in a loop. break/return "jumps" out of a loop
        if (closestNode.isWall) {
            continue;
        }

        if (closestNode.distance === Infinity) {
            return visitedNodes;
        }

        closestNode.isVisited = true;
        visitedNodes.push(closestNode);

        // The triple equals operator (===) returns true if both operands are of the same type and contain the same value. 
        // If comparing different types for equality, the result is false
        if (closestNode === finishNode) {
            return visitedNodes;
        }

        updateUnvisitedNeighbours(closestNode, grid);
    }
}