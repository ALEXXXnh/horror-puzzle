const board = document.querySelector('.container1')
const piece = document.querySelectorAll('.piece-one')
piece.forEach((piece) =>{
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

const slots = document.querySelectorAll('.slot-one')
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










const board2 = document.querySelector('.container2')
const piece2 = document.querySelectorAll('.piece-two')
piece2.forEach((piece2) =>{
    piece2.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

const slots2 = document.querySelectorAll('.slot-two')
slots2.forEach((slot2) =>{
    slot2.addEventListener('dragover', (e) =>{
        e.preventDefault();
    });

    slot2.addEventListener('drop', (e)=>{
        e.preventDefault();

        const draggedpieceId2 = e.dataTransfer.getData('text/plain');
        const draggedpiece2 = document.getElementById(draggedpieceId2);
        if(slot2.children.length === 0 && draggedpiece2){
            slot2.appendChild(draggedpiece2);
    };
    });
});












const board3 = document.querySelector('.container3')
const piece3 = document.querySelectorAll('.piece-tri')
piece3.forEach((piece3) =>{
    piece3.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

const slots3 = document.querySelectorAll('.slot-tri')
slots3.forEach((slot3) =>{
    slot3.addEventListener('dragover', (e) =>{
        e.preventDefault();
    });

    slot3.addEventListener('drop', (e)=>{
        e.preventDefault();

        const draggedpieceId3 = e.dataTransfer.getData('text/plain');
        const draggedpiece3 = document.getElementById(draggedpieceId3);
        if(slot3.children.length === 0 && draggedpiece3){
            slot3.appendChild(draggedpiece3);
    };
    });
});





const puzzle1 = document.querySelector('.puzle1')
const button1 = document.querySelector('.puz1')
    button1.addEventListener('click', function(){
        document.querySelector('.puzzle1').style.display = "flex";
        document.querySelector('.puzzle2').style.display = "none";
        document.querySelector('.puzzle3').style.display = "none";
        document.querySelector('.noselect').style.display = "none";
    });
const puzzle2 = document.querySelector('.puzle2')
    const button2 = document.querySelector('.puz2')
    button2.addEventListener('click', function(){
        document.querySelector('.puzzle1').style.display = "none";
        document.querySelector('.puzzle2').style.display = "flex";
        document.querySelector('.puzzle3').style.display = "none";
        document.querySelector('.noselect').style.display = "none";
    });
const puzzle3 = document.querySelector('.puzzle3')
    const button3 = document.querySelector('.puz3')
    button3.addEventListener('click', function(){
        document.querySelector('.puzzle1').style.display = "none";
        document.querySelector('.puzzle2').style.display = "none";
        document.querySelector('.puzzle3').style.display = "flex";
        document.querySelector('.noselect').style.display = "none";
    });


    const cursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', (e)=> 
        {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    