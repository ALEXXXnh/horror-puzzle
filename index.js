const board = document.querySelector('.container1')
const piece = document.querySelectorAll('.piece')
piece.forEach((piece) =>{
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

const slots = document.querySelectorAll('.slot')
slots.forEach((slot) =>{
    slot.addEventListener('dragover', (e) =>{
        e.preventDefault();
    });

    slot.addEventListener('drop', (e)=>{
        e.preventDefault();

        const draggedpieceId = e.dataTransfer.getData('text/plain');
        const draggedpiece = document.getElementById(draggedpieceId);
        if(slot.children.length === 0 && draggedpiece){
            slot.appendChild(draggedpiece);
    };
    });
});
