// Dijkstra' algorithm written in JavaScript
function sortNodes(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
    
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