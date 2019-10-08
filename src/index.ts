import binarySearch from "./binary-search"

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(6)
    .matchWith({
        Just: (position) => console.log("Element found at position: ", position.value),
        Nothing: () => console.log("Cannot find element")
    })
