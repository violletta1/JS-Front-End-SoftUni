function manageMeeting(array){
    let meetings = {}
    let meetingSucceeded = [];
    array.forEach(entry => {
        let [day, person] = entry.split(' ');
        if (meetings[day]){
            console.log(`Conflict on ${day}!`)
        }else{
            console.log(`Scheduled for ${day}`);
            meetings[day] = person
            meetingSucceeded.push(`${day} -> ${person}`)
        }

        
    })
    console.log(meetingSucceeded.join('\n'));
}

// Example usage:
manageMeeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
// Output:
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim

manageMeeting(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);
// Output:
// Scheduled for Friday
// Scheduled for Saturday
// Scheduled for Monday
// Conflict on Monday!
// Scheduled for Wednesday
// Friday -> Bob
// Saturday -> Ted
// Monday -> Bill
// Wednesday -> George