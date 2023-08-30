let gamesData = [
  {
    name: 'Final Fantasy XVI',
    description:
      'As a malady known as the Blight ravages the land of Valisthea and its realms plunge into war, Clive Rosfield, the firstborn son of the Archduke of Rosaria, sets out on a dark, dangerous journey to revenge following a tragedy.',
    publisher: 'Square Enix',
    role: ['Action', 'RPG'],
    releaseDate: '22/06/2023',
    price: 'Rp 1.029.000',
    link: './images/1 - FF5.PNG',
    id: 1,
    stock: 56,
  },
  {
    name: 'Elden Ring',
    description:
      'In a dark fantasy world created by Hidetaka Miyazaki (Dark Souls) and George R. R. Martin (A Song of Ice and Fire), the player is a Tarnished who is called back to the Lands Between to restore the Elden Ring and become the Elden Lord.',
    publisher: 'BANDAI NAMCO Entertainment Inc',
    role: ['RPG'],
    releaseDate: '25/02/2022',
    price: 'Rp 749.000',
    link: './images/2 - Elden ring.png',
    id: 2,
    stock: 40,
  },
  {
    name: "Marvel's Spider-Man: Miles Morales",
    description: `In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. \n But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it.`,
    publisher: 'Sony Interactive Entertainment',
    role: ['RPG'],
    releaseDate: '12/11/2020',
    price: 'Rp 749.000',
    link: './images/3 - Spiderman.png',
    id: 3,
    stock: 20,
  },
  {
    name: 'Gran Turismo® 7',
    description:
      '25 years after the release of the first title, Gran Turismo 7 brings all of the series best features as well as a myriad of improvements for the ultimate GT experience. With the reintroduction of the legendary GT Simulation Mode, buy, tune and race your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode',
    publisher: 'Worldwide Studios',
    role: ['Racing'],
    releaseDate: '04/03/2022',
    price: 'Rp 1.029.000',
    link: './images/4 - Grand Turismo 7.png',
    id: 4,
    stock: 10,
  },
  {
    name: 'Returnal',
    description: `Roguelike about an astronaut trying to reach the source of a strange signal on a surreal forbidden planet where each time she gets killed by the hostile aliens she's sent back to the moment she arrived on the alien world. \n Brought to life by stunning visual effects, the dark beauty of the decaying world around you is packed with explosive surprises. From high stakes, bullet hell-fuelled combat, to visceral twists and turns through stark and contrasting environments. You’ll explore, discover and fight your way through an unforgiving journey, where mystery stalks your every move.`,
    publisher: 'Square Enix',
    role: ['Action', 'RPG'],
    releaseDate: '22/06/2023',
    price: 'Rp 1.029.000',
    link: './images/5 - Returnal.png',
    id: 5,
    stock: 80,
  },
  {
    name: `Demon's Souls`,
    description: `In his quest for power, the 12th King of Boletaria, King Allant channelled the ancient Soul Arts, awakening a demon from the dawn of time itself, The Old One. With the summoning of The Old One, a colourless fog swept across the land, unleashing nightmarish creatures that hungered for human souls. Those whose souls were stripped from them, lost their minds – left only with the desire to attack the sane that remained.\n Now, Boletaria is cut off from the outside world, and the knights who dare penetrate the deep fog to free the land from its plight, are never seen again. As a lone warrior who has braved the baneful fog, you must face the hardest of challenges to earn the title “Slayer of Demons” and send The Old One back to its slumber.
    `,
    publisher: 'Sony Interactive Entertainment',
    role: ['Shooter'],
    releaseDate: '12/11/2020',
    price: 'Rp 1.029.000',
    link: './images/6 - Demons Soul.png',
    id: 6,
    stock: 5,
  },
  {
    name: 'Ratchet & Clank: Rift Apart',
    description: `They've travelled through space. They've travelled through time. Now, they'll have to travel through dimensions as their galaxy seems to rip itself apart. Ratchet and Clank must save the universe - again`,
    publisher: 'Sony Interactive Entertainment',
    role: ['Action'],
    releaseDate: '11/06/2021',
    price: 'Rp 1.029.000',
    link: './images/7 - Rachet.png',
    id: 7,
    stock: 9,
  },
  {
    name: 'UNCHARTED™: Legacy of Thieves Collection',
    description: `Seek your legacy and leave your mark on the map in UNCHARTED: Legacy of Thieves Collection. Experience Naughty Dog’s thrilling, cinematic storytelling and the iconic franchise’s largest blockbuster action set pieces. \n Discover lost history with the charismatic yet complex thieves, Nathan Drake and Chloe Frazer, as they travel the world with a sense of wonder, pursuing extraordinary adventures and lost lore.`,
    publisher: 'Sony Interactive Entertainment',
    role: ['Action', 'Adventure'],
    releaseDate: '28/01/2022',
    price: 'Rp 729.000',
    link: './images/8 - Uncharted.png',
    id: 8,
    stock: 3,
  },
  {
    name: 'RESIDENT EVIL 7 Biohazard',
    description:
      'Fear and isolation seep through the walls of an abandoned southern farmhouse. "7" marks a new beginning for survival horror with the “Isolated View” of the visceral new first-person perspective. Powered by the RE Engine, horror reaches incredible heights of immersion as players enter a terrifyingly new world of fear as they fight to survive.',
    publisher: 'CAPCOM ASIA',
    role: ['Action'],
    releaseDate: '24/01/2017',
    price: 'Rp 277.000',
    link: './images/9 - Resident Evil VII.png',
    id: 9,
    stock: 1,
  },
  {
    name: 'Dead Island 2',
    description: `Dead Island is back, and with it comes a host of enhancements to its winning combination of creative first-person zombie slaying, pitch-black humour and open-world exploration. \n Welcome to HELL-A. The City of Angels has been transformed into a hellish sprawl, its populace now mutated into disgusting zombies with an insatiable appetite for humans. In this extensive, visceral RPG experience you’ll journey to iconic LA locations, taking on quests, meeting eccentric survivors and enjoying a joyously pulpy narrative along the way. \n The game’s brutal melee combat gives you access to an expansive array of inventive zombie-slaying weaponry that lets you slice, smash and tear through the hordes before they get the chance to do the same to you. Can you survive HELL-A?
    `,
    publisher: 'Deep Silver',
    role: ['Action'],
    releaseDate: '21/04/2023',
    price: 'Rp 769.000',
    link: './images/10 - Dead Island 2.png',
    id: 10,
    stock: 50,
  },
];

// ! MUNCULIN CARD DI HALAMAN
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
          <div class="card-btn">
              <button type="button" class="btn btn-primary"><a href="#">Buy</a></button>
              <button type="button" class="btn btn-primary"><a href="#">Add cart</a></button>
          </div>
      </div>
  </div>`;
  }
}

render(gamesData);


// Get Name
let user = document.getElementById('user');
let username = prompt('Masukkan nama anda');

if(username) {
    user.innerText = username;
} else {
    user.innerText = 'Stranger';
}



// TOGGLE MODAL GAME
let cardImages = document.getElementsByClassName('card-img-top');
for(let card of cardImages) {
    let modal = document.getElementById('my-modal');
    // console.log(modal);
    card.addEventListener('click', function () {
        toggleModal(modal);

        for(let data of gamesData) {
            if(Number(card.id) === data.id) {
                let title = document.getElementById('title');
                let publisher = document.getElementById('publisher');
                let role = document.getElementById('modal-role');
                let releaseDate = document.getElementById('release-date');
                let description = document.getElementById('description');
                let modalImg = document.getElementById('modal-image');

                title.innerText = data.name;
                publisher.innerText = data.publisher;
                role.innerText = data.role.join(', ');
                releaseDate.innerText = data.releaseDate;
                description.innerText = data.description;
                modalImg.src = data.link;
                console.log(data.role, role);
            }
        }
    });

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
  } else {
    for (let i = 0; i < gamesData.length; i++) {
      let namaGame = gamesData[i].name;

      if (namaGame.toLowerCase().includes(searchText.toLowerCase())) {
        hasilSearch.push(gamesData[i]);
      }
    }
  }

  render(hasilSearch);
};

// ! SORTING BERDASARKAN TITLE / PRICE / ROLE / STOCK
let sorting = function (data, sortBy) {
  let sortGamesData = [];

  for (let i of data) {
    sortGamesData.push(i);
  }

  if (sortBy === 'title') {
    sortGamesData.sort((a, b) => {
      let tempA = a.name.toLowerCase(),
        tempB = b.name.toLowerCase();

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
  } else if (sortBy === 'role') {
    sortGamesData.sort((a, b) => {
      let tempA = a.role[0].toLowerCase(),
        tempB = b.role[0].toLowerCase();

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
// console.log(sorting(gamesData, 'price'));
let selectSort = document.getElementById('select2');
selectSort.addEventListener('change', function (e) {
    sorting(gamesData, this.value);
})

let filterRadio = document.getElementById('role');
filterRadio.addEventListener('change', function (e) {
    sorting(gamesData, this.value);
})







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

function toggleModal(modal) {
    if(modal.classList.contains('active')) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
    }
}


// Modal detail game
let card = document.getElementById('1');
// let modal = document.getElementById('my-modal');
let modalImg = document.getElementById('modal-image');
let description = document.getElementById('description');
// let closeModalBtn = document.getElementById('close-modal-btn');
// card.addEventListener('click', function() {
//     toggleModal(modal);
//     console.log(modal);
//     console.log('test');
// })

// closeModalBtn.addEventListener('click', function () {
//     toggleModal(modal);
// });






// Modal Request Game
let requestBtn = document.getElementById('request-btn');
let requestModal = document.getElementById('my-modal2');
let closeRequestModalBtn = document.getElementById('close-modal-btn-request');
let submitRequestBtn = document.getElementById('submit-modal-btn');
// console.log(requestBtn);
// console.log(requestModal);

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

    if(isDuplicate) {
        alert('Request telah pernah dibuat');
    } else {
        requestList.push(requestInput.value);
    }
    
    toggleModal(requestModal);
});