const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const removeElement = (array, elem) => {
    let index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
const findDoor = (allDoors,door_we_dont_want) =>{
    return door_we_dont_want.map((index) => removeElement(allDoors,door_we_dont_want[index]));
}

export default {getRandomInt, findDoor};
