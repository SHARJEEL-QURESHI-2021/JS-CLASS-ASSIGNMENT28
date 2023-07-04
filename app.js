function food() {
    let img = document.getElementById('img').value;
    let inp = document.getElementById('inp').value;
    let inp1 = document.getElementById('inp1').value;


    let a = document.getElementById('food');
    a.innerHTML = `
        <img src="${img}">
        <h3>${inp}</h3>
        <p>${inp1}</p>`

}

function drink() {
    let img = document.getElementById('img').value;
    let inp = document.getElementById('inp').value;
    let inp1 = document.getElementById('inp1').value;


    let b = document.getElementById('drink');
    b.innerHTML = `
        <img src="${img}">
        <h3>${inp}</h3>
        <p>${inp1}</p>`

}