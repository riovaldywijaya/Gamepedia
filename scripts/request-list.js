let requestGame = JSON.parse(localStorage.getItem('request-game')) || [];
let requestBody = document.getElementById('request-body');

for(let i = 0; i < requestGame.length - 1; i++) {
    for(let j = i + 0; j < requestGame.length; j++) {
        if(Number(requestGame[i]['count']) < Number(requestGame[j]['count'])) {
            [requestGame[i], requestGame[j]] = [requestGame[j], requestGame[i]]
        }
    }
}

for(let i = 0; i < requestGame.length; i++) {
    requestBody.innerHTML +=`<tr>
    <th scope="row">${i + 1}</th>
    <td>${requestGame[i]['title']}</td>
    <td>${requestGame[i]['count']}</td>
  </tr>`;
}

function render(array) {
    let requestBody = document.getElementById('request-body');
    requestBody.innerHTML = '';

    for(let i = 0; i < array.length; i++) {
        requestBody.innerHTML +=`<tr>
        <th scope="row">${i + 1}</th>
        <td>${array[i]['title']}</td>
        <td>${array[i]['count']}</td>
      </tr>`;
    }
}

render(requestGame);

let requestClose = document.getElementById('btn-close');
requestClose.addEventListener('click', function () {
    window.location.href = './index.html';
});