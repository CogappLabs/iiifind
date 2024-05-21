export default function getObjectAndImages() {
    return new Promise((resolve, reject) => {
        const dibbleObjects = {
            "Monkey": ["27992", "94126", "26777", "21181", "8715", "14799", "19471", "28341", "52497", "1715937356533card001monkeydogboat", "1715937458290card006monkeyclockelephant", "1715937472118card007monkeyfruitsnake", "1715937356533card001monkeydogboat"],
            "Dog": ["27992", "136981", "158", "49068", "40724", "561", "28136", "61715", "1715937356533card001monkeydogboat", "1715937389260card002dogumbrellafruit", "1715937484999card008dogsnakeelephant", "1715937356533card001monkeydogboat"],
            "Boat": ["27992", "14598", "28102", "59927", "94996", "236383", "86421", "1715937356533card001monkeydogboat", "1715937413583card003boatclocksnake", "1715937356533card001monkeydogboat"],
            "Umbrella": ["27992", "47928", "213791", "19693", "22017", "86421", "19773", "20878", "1715937427455card004umbrellasnakeelephant", "1715937389260card002dogumbrellafruit"],
            "Fruit": ["94126", "21181", "81558", "44892", "100351", "84709", "182381", "1715937389260card002dogumbrellafruit", "1715937443012card005fruitclockelephant", "1715937472118card007monkeyfruitsnake", "1715937356533card001monkeydogboat"],
            "Clock": ["11988", "94996", "158312", "156538", "236383", "85496", "76631", "20005", "217185", "1715937413583card003boatclocksnake", "1715937443012card005fruitclockelephant", "1715937458290card006monkeyclockelephant"],
            "Snake": ["23985", "4819", "78161", "60587", "136981", "158", "11229", "51466", "1715937413583card003boatclocksnake", "1715937427455card004umbrellasnakeelephant", "1715937472118card007monkeyfruitsnake", "1715937484999card008dogsnakeelephant"],
            "Elephant": ["2102", "6810", "113249", "21083", "32485", "32478", "1715937427455card004umbrellasnakeelephant", "1715937443012card005fruitclockelephant", "1715937458290card006monkeyclockelephant", "1715937484999card008dogsnakeelephant"]
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
    
        resolve({
            object: randomDibbleObject,
            imageId1: randomImage1,
            imageId2: randomImage2,
        });
    });
}