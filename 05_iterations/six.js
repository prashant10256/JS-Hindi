// const coding =  ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values );

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const  books = [
    {title: 'Book One', gerne:'Finction', publish:1981, edition:2004},

    {title: 'Book Two', gerne:'Non-Finction', publish:1992, edition:2008},

    {title: 'Book Three', gerne:'History', publish:1999, edition:2007},

    {title: 'Book Four', gerne:'Non-Finction', publish:1989, edition:2010},

    {title: 'Book Five', gerne:'Science', publish:2009, edition:2014},

    {title: 'Book Six', gerne:'Finction', publish:1987, edition:2010},

    {title: 'Book Seven', gerne:'History', publish:1986, edition:1996},

    {title: 'Book Eight', gerne:'Science', publish:2011, edition:2016},

    {title: 'Book One', gerne:'Non-Finction', publish:1981, edition:1989},

]
let userBooks = books.filter( (bk)=> bk.gerne == 'History')

 userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.gerne === "History"
})
console.log(userBooks);
