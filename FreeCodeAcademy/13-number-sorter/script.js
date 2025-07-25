const sortButton = document.getElementById('sort');

const sortInputArray = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the dropdowns, convert them to numbers, and sort them
    // using the built-in sort method
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    const sortedValues = inputValues.sort((a, b) => {
        // Sort the values in ascending order
        // The sort method sorts the elements of an array in place and returns the sorted array
        return a - b;
    });

    // Update the UI with the sorted values
    updateUI(sortedValues);
};

const updateUI = (array = []) => {
    // Update the output value nodes with the sorted values
    array.forEach((num, i) => {
        // Get the output value node for the current index
        // and set its inner text to the sorted number
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}

const bubbleSort = (array) => {
    // Iterate through the array multiple times
    // to ensure all elements are sorted
    for (let i = 0; i < array.length; i++) {
        // For each pass, compare adjacent elements
        // and swap them if they are in the wrong order
        for (let j = 0; j < array.length - 1; j++) {
            // Compare adjacent elements
            if (array[j] > array[j + 1]) {
                // Swap the elements
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
};

const selectionSort = (array) => {
    // Iterate through each element in the array    
    for (let i = 0; i < array.length; i++) {
        // Assume the first element is the minimum
        // and find the smallest element in the remaining unsorted array
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            // Compare the current element with the minimum element
            if (array[j] < array[minIndex]) {
                // Update the minimum index if a smaller element is found
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    // Return the sorted array
    return array;
};

const insertionSort = (array) => {
    // Iterate through the array starting from the second element
    // and insert each element into its correct position in the sorted part of the array
    for (let i = 1; i < array.length; i++) {
        // Store the current value and find its position in the sorted part
        const currValue = array[i];
        // Start from the end of the sorted part
        // and shift elements to the right until the correct position is found
        let j = i - 1;
        // Shift elements that are greater than the current value
        // to the right to make space for the current value
        while (array[j] > currValue && j >= 0) {
            // Shift the element to the right
            array[j + 1] = array[j];
            // Move to the previous element
            j--;            
        }
        // Place the current value in its correct position
        array[j+1] = currValue;
    }
    // Return the sorted array
    return array;
}

// Add an event listener to the sort button
// to trigger the sorting function when clicked
sortButton.addEventListener('click', sortInputArray);