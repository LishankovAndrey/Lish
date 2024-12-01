const now = new Date();

const timeObject = {
    Year: now.getFullYear(),
    Month: now.getMonth() + 1,
    Day: now.getDate(),
    Hour: now.getHours(),
    Minute: now.getMinutes(),
    Second: now.getSeconds()
};

console.log(timeObject);
