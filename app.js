// 1-task

let address = {
    street: "Abdulla Qahhor kochasi",
    city: "Toshkent",
    zipcode: "10001"
};

// showAddress funksiyasi
function showAddress(address) {
    for (let key in address) {
        console.log(key + ": " + address[key]);
    }
}


showAddress(address);



// 2-task
function displayReadingStatus(library) {
    for (let book of library) {
        let status = book.readingStatus ? "o'qilmoqda" : "o'qilmagan";
        console.log(`"${book.title}" kitobi, ${book.author} tomonidan yozilgan va hozir ${status}.`);
    }
}

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


displayReadingStatus(library);




// 3-task

function old35(n) {
    return (n % 3 === 0 || n % 5 === 0) && !(n % 3 === 0 && n % 5 === 0);
}
