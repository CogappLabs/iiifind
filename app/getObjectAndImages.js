export default function getObjectAndImages() {
    return new Promise((resolve, reject) => {
        const dibbleObjects = {
            "Monkey": ["27992", "94126", "26777", "21181", "8715", "14799", "19471", "28341", "52497", "1715937356533card001monkeydogboat", "1715937458290card006monkeyclockelephant", "1715937472118card007monkeyfruitsnake", "1715937356533card001monkeydogboat"],
            "Dog": ["27992", "212812", "212927", "189201", "40724", "158445", "4594", "61715", "1715937356533card001monkeydogboat", "1715937389260card002dogumbrellafruit", "1715937484999card008dogsnakeelephant", "1715937356533card001monkeydogboat"],
            "Boat": ["27992", "14598", "28102", "212909", "30839", "212869", "86421", "1715937356533card001monkeydogboat", "1715937413583card003boatclocksnake", "1715937356533card001monkeydogboat"],
            "Umbrella": ["27992", "47928", "75097", "19693", "121740", "86421", "198606", "265800", "1715937427455card004umbrellasnakeelephant", "1715937389260card002dogumbrellafruit"],
            "Fruit": ["94126", "21181", "81558", "44892", "153703", "64001", "182381", "1715937389260card002dogumbrellafruit", "1715937443012card005fruitclockelephant", "1715937472118card007monkeyfruitsnake", "1715937356533card001monkeydogboat"],
            "Clock": ["34181", "30839", "64383", "156538", "212869", "120116", "58536", "20005", "50297", "1715937413583card003boatclocksnake", "1715937443012card005fruitclockelephant", "1715937458290card006monkeyclockelephant"],
            "Snake": ["60510", "118661", "142595", "60587", "212812", "212927", "212796", "51466", "1715937413583card003boatclocksnake", "1715937427455card004umbrellasnakeelephant", "1715937472118card007monkeyfruitsnake", "1715937484999card008dogsnakeelephant"],
            "Elephant": ["66103", "6810", "149630", "190847", "66092", "264151", "1715937427455card004umbrellasnakeelephant", "1715937443012card005fruitclockelephant", "1715937458290card006monkeyclockelephant", "1715937484999card008dogsnakeelephant"]
        };
    
        // Get an array of the dibble object names
        const dibbleObjectNames = Object.keys(dibbleObjects);
    
        // Select a random dibble object
        const randomDibbleObject = dibbleObjectNames[Math.floor(Math.random() * dibbleObjectNames.length)];
    
        // Select two random image IDs from the chosen object array
        const images = dibbleObjects[randomDibbleObject];
        let randomImage1, randomImage2, otherImages;
        let isPairInOtherArray = [];
    
        do {
            randomImage1 = images[Math.floor(Math.random() * images.length)];
            randomImage2 = images[Math.floor(Math.random() * images.length)];
          
            // Check if the two image IDs are in another dibbleObject array together
            const otherObjects = dibbleObjectNames.filter(name => name !== randomDibbleObject);
            isPairInOtherArray = otherObjects.some(name => {
              const otherImages = dibbleObjects[name];
              return otherImages.includes(randomImage1) && otherImages.includes(randomImage2);
            });
          } while (randomImage1 === randomImage2 || isPairInOtherArray);
    
        console.log(randomDibbleObject, randomImage1, randomImage2);
        resolve({
            object: randomDibbleObject,
            imageId1: randomImage1,
            imageId2: randomImage2,
        });
    });
}