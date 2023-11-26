

//second option ///////////////////////////////////////////////
function filterSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    const numberOfSongs = Number(input[0]);
    const songs = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        const [typeList, name, time] = input[i].split('_');
        const song = new Song(typeList, name, time);
        songs.push(song);
    }

    const filterType = input[input.length - 1];

    if (filterType === 'all') {
        // Print names of all songs
        songs.forEach(song => console.log(song.name));
    } else {
        // Print names of songs with the specified typeList
        const filteredSongs = songs
            .filter(song => song.typeList === filterType)
            .map(song => song.name);

        console.log(filteredSongs.join('\n'));
    }
}

// Example usage:
filterSongs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
// Output: DownTown Kiss Smooth Criminal

filterSongs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
// Output: Andalouse

filterSongs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
// Output: Replay Photoshop
