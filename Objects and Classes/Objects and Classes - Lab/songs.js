function solve(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songsCount = data[0];
    const favouriteTypeList = data[data.length - 1];
    for (let i = 1; i <= songsCount; i++) {
        let [typeList, name, time] = data[i].split('_');
        if (favouriteTypeList === 'all') {
            console.log(new Song(typeList, name, time).name);
            continue;
        }
        if (typeList === favouriteTypeList) console.log(new Song(typeList, name, time).name);
    }
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);