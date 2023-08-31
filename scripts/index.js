// Function untuk mempopup modal game detail dengan mengklik gambar gamenya
function toggleGameModal(data) {
    let cardImages = document.getElementsByClassName('card-img-top');
    for(let card of cardImages) {
        let modal = document.getElementById('my-modal');
        card.addEventListener('click', function () {
            toggleModal(modal);
    
            let title = document.getElementById('title');
            let publisher = document.getElementById('publisher');
            let role = document.getElementById('modal-role');
            let releaseDate = document.getElementById('release-date');
            let description = document.getElementById('description');
            let modalImg = document.getElementById('modal-image');
    
            for(let gameData of data) {
                if(Number(card.id) === gameData.id) {
                    title.innerText = gameData.name;
                    publisher.innerText = gameData.publisher;
                    role.innerText = gameData.role.join(', ');
                    releaseDate.innerText = gameData.releaseDate;
                    description.innerText = gameData.description;
                    modalImg.src = gameData.link;
                }
            }
        });
    }
}

function searchGame(gamesData) {
    let searchText = document.getElementsByClassName('form-control')[0].value;
    let filter = document.getElementById('select').value;
    let hasilSearch = [];

    if (filter === 'genre') {
        for (let game of gamesData) {
            let roles = game.role;

            for (let i = 0; i < roles.length; i++) {
                if (roles[i].toLowerCase().includes(searchText.toLowerCase())) {
                    hasilSearch.push(game);
                }
            }
        }
    } else if(filter === 'role') {
        for (let i = 0; i < gamesData.length; i++) {
            let namaGame = gamesData[i].name;

            if (namaGame.toLowerCase().includes(searchText.toLowerCase())) {
                hasilSearch.push(gamesData[i]);
            }
        }
    } else {
        hasilSearch = gamesData;
    }

    document.getElementsByClassName('form-control')[0].value = '';

    render(hasilSearch);

    return [hasilSearch, true];
}

// Function check duplicate request
function checkDuplicateRequest(data, request) {
    let isDuplicate = false;

    for(let game of data) {
        if(game === request) {
            isDuplicate = true;
            break;
        }
    }

    return isDuplicate;
}

// Function toggle modal game dan request
function toggleModal(modal) {
    if(modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
    }
}

// Function untuk menambahkan game ke cart
// function addGame(cartItem, game) {
//     let {name, publisher, role, releaseDate, price, link, id, description} = game;
//     let cartGame = {
//         id,
//         name,
//         description,
//         publisher,
//         role,
//         releaseDate,
//         price,
//         link,
//         qty : 0
//     }

//     if(cartItem.length === 0) {
//         cartGame['qty'] = 1;

//         cartItem.push(cartGame);
//     } else {
//         let duplicate = false;

//         for(let cartGame of cartItem) {
//             if(cartGame['title'] === game['title']) {
//                 cartGame['qty']++;
//                 duplicate = true;
//                 break;
//             }
//         }

//         if(!duplicate) {
//             cartItem.push(cartGame);
//         }
//     }
// }

// Function handler card btn
function handlerCardButton() {

}

// ! SORTING BERDASARKAN TITLE / PRICE / ROLE / STOCK
let sorting = function (data, sortBy) {
    let sortGamesData = [];

    for (let i of data) {
        let {name, description, publisher, role, releaseDate, price, link, id, stock} = i;

        sortGamesData.push({
            name,
            description,
            publisher,
            role,
            releaseDate,
            price, 
            link,
            id,
            stock
        });
    }

    if (sortBy === 'title') {
        sortGamesData.sort((a, b) => {
            let tempA = a.name.toLowerCase();
            let tempB = b.name.toLowerCase();

            if (tempA < tempB) {
                return -1;
            }
            if (tempA > tempB) {
                return 1;
            }

            return 0;
        });
    } else if (sortBy === 'price') {
        for (let i = 0; i < sortGamesData.length; i++) {
            let price = '';

            for (let j = 0; j < sortGamesData[i].price.length; j++) {
                if (!isNaN(Number(sortGamesData[i].price[j])) && sortGamesData[i].price[j] !== ' ') {
                    price += sortGamesData[i].price[j];
                }
            }

            sortGamesData[i].price = Number(price);
        }
        
        sortGamesData.sort((a, b) => {
            return b.price - a.price;
        });

        let temp = [];

        for(let sortGame of sortGamesData) {
            for(let game of data) {
                if(sortGame['id'] === game['id']) {
                    temp.push(game);
                    break;
                }
            }
        }

        sortGamesData = temp;
    } else if (sortBy === 'role') {
        sortGamesData.sort((a, b) => {
            let tempA = a.role[0].toLowerCase()
            let tempB = b.role[0].toLowerCase();

            if (tempA < tempB) {
                return -1;
            }
            if (tempA > tempB) {
                return 1;
            }

            return 0;
        });
    } else if (sortBy === 'stock') {
        sortGamesData.sort((a, b) => {
            return b.stock - a.stock;
        });
    }

    render(sortGamesData);
};

// Function Render Card Game
function render(array) {
    let cardContainer = document.getElementsByClassName('card-container')[0];
    cardContainer.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        cardContainer.innerHTML += `<div class="card">
        <img src="${array[i].link}" id="${array[i].id}" class="card-img-top" alt="${array[i].name}">
        <div class="card-body">
            <div class="card-info">
                <h5 class="card-title">${array[i].name}</h5>
                <p class="card-text">Genre : ${array[i].role}</p>
                <p class="card-text">Harga : ${array[i].price}</p>
                <p class="card-text">stock : ${array[i].stock}</p>
            </div>
            <div id="card-btn" class="card-btn">
                <button type="button" class="btn btn-primary buy" name="${array[i].name}"><a href="./request-list.html">Buy</a></button>
                <button type="button" class="btn btn-primary add" name="${array[i].name}"><a href="#">Add cart</a></button>
            </div>
        </div>
    </div>`;
    }

    toggleGameModal(array);
}

render(gamesData);



// Get Name
let user = document.getElementById('user');
let username = localStorage.getItem('name');

if(username) {
    user.innerText = username;
} else {
    username = prompt('Masukkan nama anda');

    if(!username) {
        localStorage.setItem('name', 'Stranger');
    }

    let name = localStorage.getItem('name');

    user.innerText = name;
}




// Close game modal
let modal = document.getElementById('my-modal');
let closeModalBtn = document.getElementById('close-modal-btn');

closeModalBtn.addEventListener('click', function () {
    toggleModal(modal);
});




// ! FILTER BERDASARKAN TOMBOL SEARCH
let tombolSearch = document.getElementsByClassName('btn-outline-secondary')[0];
tombolSearch.onclick = function () {
    searchGame(gamesData);
};


// Sorting Game
let selectSort = document.getElementById('select2');
selectSort.addEventListener('change', function () {
    let newGamesData = searchGame(gamesData);
    if(newGamesData[1]) {
        sorting(newGamesData[0], this.value);
    } else {
        sorting(gamesData, this.value);
    }
})

let filterRadio = document.getElementById('role');
filterRadio.addEventListener('change', function (e) {
    sorting(gamesData, this.value);
});


let divCardBtn = document.getElementById('card-btn');




// Modal Request Game
let requestBtn = document.getElementById('request-btn');
let requestModal = document.getElementById('my-modal2');
let closeRequestModalBtn = document.getElementById('close-modal-btn-request');
let submitRequestBtn = document.getElementById('submit-modal-btn');

requestBtn.addEventListener('click', function () {
    toggleModal(requestModal);
});

closeRequestModalBtn.addEventListener('click', function () {
    toggleModal(requestModal);
});

// Submit request handler
submitRequestBtn.addEventListener('click', function () {
    let requestInput = document.getElementById('request');
    let isDuplicate = checkDuplicateRequest(requestList, requestInput.value);

    if(!requestInput.value) {
        alert('Masukan nama game');
        return;
    } else if(isDuplicate) {
        alert('Request telah pernah dibuat');
    } else {
        requestList.push(requestInput.value);
    }
    
    toggleModal(requestModal);
});

