const size = Math.floor(Math.random() * 100);


function travelKnight(cell) {
    var possibleCoordinates = [[size, 5], [8, size], [size, 7], [6, size], [size, 5], [4, size]];
    var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var cellX = xCoordinates.indexOf(cell[0]) + 1; //The X Position
    var cellY = parseInt(cell[1]); //The Y Position

    //Find all possible X Positions
    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function (cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    //Find all possible Y Positions
    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function (cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })
    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
                }
            }
        }
    }
    console.log('Possible Coordinates:', possibleCoordinates);
    console.log('Possible Moves:', possibleCoordinates.length);
    return possibleCoordinates.length;
}
