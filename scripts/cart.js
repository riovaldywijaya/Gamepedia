let gamesData2 = [
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
];

// RENDER CARD BERDASARKAN DATA
function renderCart(array) {
  let cardContainer = document.querySelector('tbody');
  cardContainer.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    cardContainer.innerHTML += `<tr>
    <td>
      <div class="row">
        <img
          src="${array[i].link}"
          alt="${array[i].name}"
          class="col-3"
        />
        <div class="col-9">
          <div>${array[i].name}</div>
          <div>Genre : ${array[i].role}</div>
        </div>
      </div>
    </td>
    <td>
      <div class="custom-quantity">12</div>
    </td>
    <td>
      <p>${array[i].price}</p>
    </td>
    <td>
      <button type="button" class="btn btn-success" id="${array[i].id}">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="btn btn-danger" id="${array[i].id}">
      <i class="far fa-trash-alt"></i>
      </button>
      </td>
      </tr>`;
  }

  //   let ringkasanPembelian = document.getElementsByClassName('flex-tween')[0];
  //   let totalBarang = ringkasanPembelian.querySelectorAll('div')[0];
  //   totalBarang.innerHTML = `(${gamesData2.length} Barang)`;

  //   let totalHarga = ringkasanPembelian.querySelectorAll('div')[1];
  //   totalHarga.innerHTML;
}

renderCart(gamesData2);

// FUNGSI MENGHAPUS DATA
let deleteObject = function (data, value) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === value) {
      data.splice(i, 1);
      //   break;
    }
  }
  renderCart(data);
};

// MENGHAPUS DATA BERDASARKAN CLICK
//! VERSI 1
// for (let i = 0; i < gamesData2.length; i++) {
//   let tombolDelete = document.getElementsByClassName('btn-danger')[i];
//   let id = Number(tombolDelete['id']);
//   tombolDelete.addEventListener('click', function () {
//     // console.log(id);
//     deleteObject(gamesData2, id);
//   });
// }

//! VERSI 2
let tombolDelete = document.getElementsByClassName('btn-danger');
// console.log(tombolDelete);
for (let i = 0; i < tombolDelete.length; i++) {
  tombolDelete[i].addEventListener('click', function () {
    // console.log(Number(tombolDelete[i].id));
    deleteObject(gamesData2, Number(tombolDelete[i].id));
  });
}
