export default function getObjectAndImages() {
    const dibbleObjects = {
        "Monkey": ["27992", "94126", "26777", "21181", "8715", "14799", "19471", "28341", "52497"],
        "Dog": ["27992", "212812", "212927", "189201", "40724", "158445", "4594", "61715"],
        "Boat": ["27992", "14598", "28102", "212909", "30839", "212869", "86421"],
        "Umbrella": ["27992", "47928", "75097", "75038", "121740", "86421", "198606", "265800"],
        "Fruit": ["94126", "21181", "81558", "44892", "153703", "64001", "182381"],
        "Clock": ["34181", "30839", "64383", "156538", "212869", "120116", "58536", "20005", "50297"],
        "Snake": ["60510", "118661", "142595", "60587", "212812", "212927", "212796", "51466"],
        "Elephant": ["66103", "6810", "149630", "190847", "66092", "81558"]
    };

    // Get an array of the dibble object names
    const dibbleObjectNames = Object.keys(dibbleObjects);

    // Select a random dibble object
    const randomDibbleObject = dibbleObjectNames[Math.floor(Math.random() * dibbleObjectNames.length)];

    // Select two random image IDs from the chosen object array
    const images = dibbleObjects[randomDibbleObject];
    const randomImage1 = images[Math.floor(Math.random() * images.length)];
    let randomImage2;

    do {
        randomImage2 = images[Math.floor(Math.random() * images.length)];
    } while (randomImage1 === randomImage2);

    console.log(randomDibbleObject, randomImage1, randomImage2);

    // Return the object and image IDs
    return {
        object: randomDibbleObject,
        imageId1: randomImage1,
        imageId2: randomImage2,
    };
}