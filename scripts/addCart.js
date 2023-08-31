function addGame(cartItem, game) {
    let {name, publisher, role, releaseDate, price, link, id, description} = game;
    let cartGame = {
        id,
        name,
        description,
        publisher,
        role,
        releaseDate,
        price,
        link,
        qty : 0
    }

    if(cartItem.length === 0) {
        cartGame['qty']++;

        cartItem.push(cartGame);
    } else {
        let duplicate = false;

        for(let cartGame of cartItem) {
            if(cartGame['name'] === game['name']) {
                cartGame['qty']++;
                duplicate = true;
                break;
            }
        }

        if(!duplicate) {
            cartGame['qty'] = 1;
            cartItem.push(cartGame);
        }
    }

    
    localStorage.setItem('cart', JSON.stringify(cartItem));

    console.log(JSON.parse(localStorage.getItem('cart')));
}

// addGame(cartItems, 'assassins');
// addGame(cartItems, 'assassins');

let buyButtons = document.getElementsByClassName('buy');
let addButtons = document.getElementsByClassName('add');

for(let addBtn of addButtons) {
    addBtn.addEventListener('click', function (e) {

        let name = addBtn.getAttribute('name');
        
        for(let game of gamesData) {
            if(name === game['name']) {
                addGame(cartItems, game);
                break;
            }
        }
    });

}

for(let buyBtn of buyButtons) {
    buyBtn.addEventListener('click', function (e) {
        // e.preventDefault();
        let name = buyBtn.getAttribute('name');

        for(let game of gamesData) {
            if(name === game['name']) {
                addGame(cartItems, game);
                break;
            }
        }
    });
}