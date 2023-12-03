function solve() {
    // Add a click event listener to the button with id 'btnSend'
    document.querySelector('#btnSend').addEventListener('click', onClick);

    // Define the onClick function
    function onClick() {
        // Initialize an empty object to store restaurant data
        let restaurants = {};
        // Get the input data from the textarea
        const inputs = document.querySelector('textarea').value;
        // Parse the JSON input into an array
        let restaurantsData = JSON.parse(inputs);

        // Loop through each element in the array
        restaurantsData.forEach(element => {
            // Split the element into restaurant name and workers' data
            let [restaurant, workers] = element.split(' - ');

            // Check if the restaurant is not already in the object, initialize its data
            if (!restaurants.hasOwnProperty(restaurant)) {
                restaurants[restaurant] = {
                    averageSalary: 0,
                    bestSalary: -1,
                    workers: {},
                };
            }

            let totalSalary = 0;

            // Loop through each worker's data
            for (const iterator of workers.split(", ")) {
                // Split worker's data into name and salary
                let [name, salary] = iterator.split(" ");
                // Add the worker to the restaurant's workers object
                restaurants[restaurant].workers[name] = Number(salary);
                // Update the best salary if the current salary is greater
                if (Number(salary) > restaurants[restaurant].bestSalary) {
                    restaurants[restaurant].bestSalary = Number(salary);
                }
            }

            // Calculate the total salary for the restaurant
            Object.values(restaurants[restaurant].workers).forEach(element => {
                totalSalary += element;
            });
            
            // Calculate the average salary for the restaurant
            restaurants[restaurant].averageSalary = totalSalary / Object.keys(restaurants[restaurant].workers).length;
        });

        // Initialize an object to store the best restaurant data
        let bestRestaurant = {
            name: "",
            averageSalary: 0,
            bestSalary: -1,
            workers: {},
        };

        // Loop through each restaurant in the 'restaurants' object
        Object.entries(restaurants).forEach(element => {
            const restaurantsData = element[1];
            // Check if the average salary is greater than the current best restaurant
            if (restaurantsData.averageSalary > bestRestaurant.averageSalary) {
                // Update the best restaurant data
                bestRestaurant.name = element[0];
                bestRestaurant.averageSalary = restaurantsData.averageSalary;
                bestRestaurant.bestSalary = restaurantsData.bestSalary;
                bestRestaurant.workers = restaurantsData.workers;
            }
        });

        // Display the best restaurant information in the HTML
        let outputBestRestaurant = document.querySelector("#bestRestaurant p");
        outputBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

        // Display the workers' information for the best restaurant in the HTML
        let outputWorkers = document.querySelector("#workers p");
        // Sort the workers by salary in descending order
        let sortedSalary = Object.entries(bestRestaurant.workers).sort((a, b) => b[1] - a[1]);
        // Display the sorted workers' information in the HTML
        sortedSalary.forEach(element => {
            outputWorkers.textContent += `Name: ${element[0]} With Salary: ${element[1]} `;
        });
        // Trim any extra whitespace
        outputWorkers.textContent = outputWorkers.textContent.trim();
    }
}
