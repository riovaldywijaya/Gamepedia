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
let card = document.getElementById('card-img');
let modal = document.getElementById('my-modal');
let modalImg = document.getElementById('modal-image');
let description = document.getElementById('description');
let closeModalBtn = document.getElementById('close-modal-btn');
card.addEventListener('click', function() {
    toggleModal(modal);
})

closeModalBtn.addEventListener('click', function () {
    toggleModal(modal);
});




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

    if(isDuplicate) {
        alert('Request telah pernah dibuat');
    } else {
        requestList.push(requestInput.value);
    }
    
    toggleModal(requestModal);
});