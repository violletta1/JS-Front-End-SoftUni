function loadingBar(number) {
    let percentage = number / 10;
    let progress = Array(10).fill('.');

    if (percentage === 10) {
        console.log("100% Complete!");
        console.log(`[${progress.join('')}]`);
    } else {
        console.log(`${number}% [${progress.fill('%', 0, percentage).join('')}${progress.fill('.', percentage).join('')}]`);
        console.log("Still loading...");
    }
}

// Examples
loadingBar(30); //30% [%%%.......%%%.......]
                //Still loading...
                
loadingBar(50); //50% [%%%%%.....%%%%%.....]
                //Still loading...

loadingBar(100);//100% Complete!
                //[..........]
