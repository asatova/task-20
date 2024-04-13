// 1-task
let address = {
    street: 'yakkasaroy',
    city: 'tashkent',
    zipcode: '10000'
};
console.log(address);
const showAddress = Object.entries(address);


// 2-task

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

console.log(library);


// 3-task

function old35(n) {
    return (n % 3 === 0 || n % 5 === 0) && !(n % 3 === 0 && n % 5 === 0);
}
