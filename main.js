const form = document.querySelector('#form');
const button = document.querySelector('.button');
const input = document.querySelector('#input');
const p = document.querySelector('#text');
const ul = document.querySelector('.text');
const btn = document.querySelector('.delete');
let massive = []

button.addEventListener('click', function (event) {
        event.preventDefault();
        massive.push({ value: `<span data-index="1">${input.value}</span>}`})
        console.log(massive)
        if(event.target){
        const li = document.createElement("li");
        li.classList.add('list');
        li.innerHTML = `${input.value}<button class='delete'>[Delete]</button>`
        ul.append(li)
        }
});
ul.addEventListener('click', changeAuthorColor);
function changeAuthorColor(event) {
        const target = event.target;
        if (target.className === 'list') {
                target.classList.toggle('unique');
        }
}
ul.addEventListener('click', deleteLiofList);
function deleteLiofList(event) {
        const del = event.target.closest('.delete');
        del.parentElement.remove();
        if(del){
                massive.splice('1',1)
        }
}

