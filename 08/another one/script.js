// // let element = document.getElementById('btn');

// // element.addEventListener("click", function(){
// //     console.log("hello");
// // })

// // element.addEventListener('dblclick', greet);

// let input = document.getElementById('mainInput');

// input.addEventListener('keypress', function(event){
//     console.log(event.target.value);
//     console.log('Change event');
// });

// function handleClick(e){
//     console.log(e);
// }

// input.addEventListener('blur', handleClick);

// let btn2 = document.getElementById('btn2');

// // btn2.addEventListener('click', function(){
// //     Element.removeEventListener('click', function(){
// //         console.log('Removed Event');
// //     })
// // })


// function removingEventListener(){
//     console.log('MouseOut');


//     btn2.removeEventListener('mouseot', removingEventListener);
// }

// btn2.addEventListener('mouseout', removingEventListener);

//getting value from input and checking the length
let content = document.getElementById('content');
function checkWordLength(word){
    if(word.length >= 10){
        let text = 'The length of the word is too long';
        content.innerHTML = `<p>${text}</p>`;
    }
    else{
        content.innerHTML = '';
    }
}

//adding an event without the element in separate value
//adding event inline
document.getElementById('textInput')
    .addEventListener('keydown', function(e){
        //getting value from input
        let value = e.target.value;
        checkWordLength(value);
    })


