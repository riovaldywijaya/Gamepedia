let cartGames = JSON.parse(localStorage.getItem('cart')) || [];

// RENDER CARD BERDASARKAN DATA
function renderCart(array) {
    // MUNCULIN CARD KE CONTAINER => START
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
          <div class="custom-quantity">${array[i].qty}</div>
        </td>
        <td>
          <p>${array[i].price}</p>
        </td>
        <td>
          <button type="button" class="btn btn-success edit" name="${array[i].name}">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn btn-danger delete" name="${array[i].name}">
          <i class="far fa-trash-alt"></i>
          </button>
          </td>
          </tr>`;
    }
    // MUNCULIN CARD KE CONTAINER => END
  
    //   TOTAL BARANG => START
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += Number(array[i].qty);
    }

    let ringkasanPembelian = document.getElementsByClassName('flex-tween')[0];
    let totalBarang = ringkasanPembelian.querySelectorAll('div')[0];
    totalBarang.innerHTML = `(${temp} Items)`;
    //   TOTAL BARANG => END
  
    //   TOTAL HARGA => START
    let totalHarga = ringkasanPembelian.querySelectorAll('div')[1];
    let totalHargaNumber = 0;
    //   UBAH FORMAT HARGA STRING KE HARGA NUMBER
    for (let i = 0; i < array.length; i++) {
        let numberString = array[i].price.replace(/[^\d]/g, ''); // menghapus 'Rp', '.' , ' '
        totalHargaNumber += Number(numberString) * Number(array[i].qty);
    }
    //   UBAH FORMAT HARGA NUMBER KE HARGA STRING
    let totalHargaString = 'Rp. ' + totalHargaNumber.toLocaleString('id-ID');
    totalHarga.innerHTML = totalHargaString;
    //   TOTAL HARGA => END
  
    //   TOTAL HARGA 2 => START
    let ringkasanBayar = document.getElementsByClassName('flex-tween')[1];
    let totalBayar = ringkasanBayar.querySelectorAll('div')[1];
    totalBayar.innerHTML = totalHargaString;
    //   TOTAL HARGA 2 => END
  
    if (array.length !== 0) {
        for (let i = 0; i < cartGames.length; i++) {
            let tombolDelete = document.getElementsByClassName('btn-danger').item(i);
    
            tombolDelete.onclick = function (e) {
            deleteObject(cartGames, this.name);
            };
        }
    }
  
    // ! UPDATE QUANTITY GAME TO BUY
    if (array.length !== 0) {
        for (let i = 0; i < cartGames.length; i++) {
            let tombolEdit = document.getElementsByClassName('btn-success').item(i);
    
            tombolEdit.onclick = function (e) {
            let editByUser = prompt('Masukan jumlah yang ingin anda beli');
            editQuantity(cartGames, this.name, editByUser);
            };
        }
    }
}
  
  renderCart(cartGames);

// Get Name
let user = document.getElementById("user");
let username = localStorage.getItem("name");

if (username) {
	user.innerText = username;
} else {
	username = prompt("Masukkan nama anda");

	if (!username) {
		localStorage.setItem("name", "Stranger");
	} else {
        localStorage.setItem('name', username);
    }

	let name = localStorage.getItem("name");

	user.innerText = name;
}

// FUNGSI MENGHAPUS DATA
let deleteObject = function (data, value) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].name === value) {
			data.splice(i, 1);
			break;
		}
	}
	renderCart(data);
};

//! FUNGSI UBAH QUANTITY
let editQuantity = function (data, value, user) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === value) {
            data[i].qty = user;
        }
    }

    renderCart(data);
};

// ! CLICK CONFIRM PURCHASE MODAL
let pembelianButton = document.getElementsByClassName("custom-btn")[0];
let containerModal = document.getElementsByClassName("modal")[0];

pembelianButton.addEventListener("click", function () {
    if(cartGames.length === 0) {
        alert('Please insert the game first!');
    } else {
        containerModal.style.display = "block";
    }
});

// ! CLICK CLOSE BUTTON MODAL
let a = (document.querySelector(".modal-footer .btn").onclick = () => {
	containerModal.style.display = "none";

	cartGames = [];
    localStorage.setItem('cart', JSON.stringify(cartGames));
	renderCart(cartGames);
});


let closeCart = document.getElementById('close-cart');
closeCart.addEventListener('click', function () {
    window.location.href = './index.html'
});
