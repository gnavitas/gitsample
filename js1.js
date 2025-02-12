
const date = new Date();
console.log(`ello ${date}`);
console.log(`date = ${date.getDate()}`);
console.log(`day = ${date.getDay()}`);const futureDate = new Date('2025-12-31');
const timeDiff = futureDate.getTime() - date.getTime();
const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(`Days until end of 2025: ${daysDiff}`);