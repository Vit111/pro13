const form = document.querySelector('#form');
const button = document.querySelector('.button');
const input = document.querySelector('#input');
const p = document.querySelector('#text');
const ul = document.querySelector('.text');
const btn = document.querySelector('.delete');
const span = document.querySelector('#span');
let massive = []

button.addEventListener('click', function (event) {
        event.preventDefault();
        massive.push({value:input.value})
        console.log(massive)
        if(event.target){
        const li = document.createElement("li");
        li.classList.add('list');
        li.innerHTML = `<span data-set="new">${input.value}</span><button data-set="delete">[Delete]</button>`
        ul.append(li)
        }
});

ul.addEventListener('click', changeC);
function changeC(event) {
        const target = event.target;
        if (target.dataset.set === "new") {
                target.classList.toggle('unique');
        }
        if (target.dataset.set === "delete") {
                target.classList.toggle('delete');
                const del = event.target.closest('.delete');
                del.parentElement.remove();
        if(del){
                massive.splice('1',1)
        }
        }
}
// const form = document.querySelector('#form');
// const button = document.querySelector('.button');
// const input = document.querySelector('#input');
// const p = document.querySelector('#text');
// const ul = document.querySelector('.text');
// const btn = document.querySelector('.delete');
// const span = document.querySelector('#span');
// let massive = []

// button.addEventListener('click', function (event) {
//         event.preventDefault();
//         massive.push({value:input.value})
//         console.log(massive)
//         if(event.target){
//         const li = document.createElement("li");
//         li.classList.add('list');
//         li.innerHTML = `<span order-state="new">${input.value}</span><button order-state="delete">[Delete]</button>`
//         ul.append(li)
//         }
// });
// span.addEventListener('click', changeAuthorColor);
// function changeAuthorColor(event) {
//         console.log(event)
//         const target = event.target;
//         if (target.tagName === 'list') {
//                 target.classList.toggle('unique');
//         }
// }
// btn.addEventListener('click', deleteLiofList);
// function deleteLiofList(event) {
//         const del = event.target.closest('.delete');
//         del.parentElement.remove();
//         if(del){
//                 massive.splice('1',1)
//         }
// }

