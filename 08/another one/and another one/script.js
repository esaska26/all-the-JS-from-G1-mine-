function createButton(){
    let html = `<button id="btn">Click me</button>`;
    document.getElementById('main')
    .innerHTML = html;
}
//error
// document.getElementById('btn')
//     .addEventListener('click', function(){
//     console.log('btn is clicked');
// })
;
document.getElementById('btn1')
    .addEventListener('click', function(){
    createButton()
})

document.getElementById('main')
    .addEventListener('click', function(){
        e.stopPropagation();
        console.log(e);
    console.log('btn is clicked');
})
