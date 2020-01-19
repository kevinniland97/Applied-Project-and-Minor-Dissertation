 /**
  * Performs Dijkstra's algorithm. Returns all nodes in the order in which they were visited. Also, makes nodes point
  * back to their previous node, effectively allowing us to compute the shortest path by backtracking from the finish node
  * 
  * @param {*} grid - The actul grid the algorithm will be run on
  * @param {*} startNode - The start node
  * @param {*} finishNode - The finish node
  */
 export function dijkstra(grid, startNode, finishNode) {
     const visitedNodesInOrder = [];

     startNode.distance = 0;

     const unvisitedNodes = getAllNodes(grid);

     while (!!unvisitedNodes.length) {
         sortNodesByDistance(unvisitedNodes);
         const closestNode = unvisitedNodes.shift();

         // Checks for a wall - if we encounter one, we continue. The reasoning for using 'continue' instead of 'break'
         // or 'return' is that 'continue' only jumps over one iteration of the loop while 'break'/'return' jumps out of the
         // loop completely
         if (closestNode.isWall) continue;

         /**
          *  JavaScript has two visually similar but very different ways to test for equality. The difference is that 
          * '===' tests for strict equality - this means that the type and value that are being compared must be the same
          * while '==' tests for loose equality - this means that the two values are compared only after attempting to convert
          * them to a commone type. Double equals also performs type coercion
          * Here, we are checking if the closest node's distance is at a distance of infinity. If true, return the visited 
          * nodes in order
          */
         if (closestNode.distance === Infinity) return visitedNodesInOrder;

         // Set the closest node to be visited (true)
         closestNode.isVisited = true;

         // Push the closest node to the visited nodes array
         visitedNodesInOrder.push(closestNode);

         // Again, we use triple equality to check if the closest node is finish node. Double equality will not be enough
         // as we must check if the type AND value are exactly the same. If they are, return the visited nodes in order
         if (closestNode === finishNode) return visitedNodesInOrder;

         updateUnvisitedNeighbors(closestNode, grid);
     }
 }

 // Sorts the nodes by distance. Takes in the unvisited nodes as its parameter
 function sortNodesByDistance(unvisitedNodes) {
     unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
 }

 // Updates the unvisited neighbours
 function updateUnvisitedNeighbors(node, grid) {
     const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);

     for (const neighbor of unvisitedNeighbors) {
         neighbor.distance = node.distance + 1;
         neighbor.previousNode = node;
     }
 }

 // Gets unvisited neighbours
 function getUnvisitedNeighbors(node, grid) {
     const neighbors = [];
     const {
         col,
         row
     } = node;

     if (row > 0) neighbors.push(grid[row - 1][col]);

     if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);

     if (col > 0) neighbors.push(grid[row][col - 1]);

     if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

     return neighbors.filter(neighbor => !neighbor.isVisited);
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

 // Backtracks from the finish node and finds the shortest path
 export function getNodesInShortestPathOrder(finishNode) {
     const nodesInShortestPathOrder = [];

     let currentNode = finishNode;

     while (currentNode !== null) {
         nodesInShortestPathOrder.unshift(currentNode);
         currentNode = currentNode.previousNode;
     }

     return nodesInShortestPathOrder;
 }