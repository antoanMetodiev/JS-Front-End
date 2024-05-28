function solve(data) {
    let map = new Map();
    for (let meeting of data) {
        let [day, name] = meeting.split(' ');

        if (map.has(day)) console.log(`Conflict on ${day}!`);
        else {
            map.set(day, name);
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key of map.keys()) {
        console.log(`${key} -> ${map.get(key)}`);
    }
}

solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);