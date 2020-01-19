/**
 * Gets the distance between two nodes
 * 
 * @param {*} nodeOne - First node
 * @param {*} nodeTwo - Second node
 */
function getDistance(nodeOne, nodeTwo) {
    // Current co-ordinates and target co-ordinates
    let currentCoordinates = nodeOne.id.split("-");
    let targetCoordinates = nodeTwo.id.split("-");

    // Parse x position of the current co-ordinates and target co-ordinates
    let x1 = parseInt(currentCoordinates[0]);
    let x2 = parseInt(targetCoordinates[0]);

    // Parse y position of the current co-ordinates and target co-ordinates
    let y1 = parseInt(currentCoordinates[1]);
    let y2 = parseInt(targetCoordinates[1]);

    /**
     * 
     */
    if (x2 < x1) {
        if (nodeOne.direction === "up") {
            return [1, ["f"], "up"];
        } else if (nodeOne.direction === "right") {
            return [2, ["l", "f"], "up"];
        } else if (nodeOne.direction === "left") {
            return [2, ["r", "f"], "up"];
        } else if (nodeOne.direction === "down") {
            return [3, ["r", "r", "f"], "up"];
        }
    } 
    
    /**
     * 
     */
    else if (x2 > x1) {
        if (nodeOne.direction === "up") {
            return [3, ["r", "r", "f"], "down"];
        } else if (nodeOne.direction === "right") {
            return [2, ["r", "f"], "down"];
        } else if (nodeOne.direction === "left") {
            return [2, ["l", "f"], "down"];
        } else if (nodeOne.direction === "down") {
            return [1, ["f"], "down"];
        }
    }

    /**
     * 
     */
    if (y2 < y1) {
        if (nodeOne.direction === "up") {
            return [2, ["l", "f"], "left"];
        } else if (nodeOne.direction === "right") {
            return [3, ["l", "l", "f"], "left"];
        } else if (nodeOne.direction === "left") {
            return [1, ["f"], "left"];
        } else if (nodeOne.direction === "down") {
            return [2, ["r", "f"], "left"];
        }
    } 
    
    /**
     *
     */  
     else if (y2 > y1) {
        if (nodeOne.direction === "up") {
            return [2, ["r", "f"], "right"];
        } else if (nodeOne.direction === "right") {
            return [1, ["f"], "right"];
        } else if (nodeOne.direction === "left") {
            return [3, ["r", "r", "f"], "right"];
        } else if (nodeOne.direction === "down") {
            return [2, ["l", "f"], "right"];
        }
    }
}

// Export getDistance
module.exports = getDistance;