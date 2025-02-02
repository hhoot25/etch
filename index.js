const container = document.querySelector('#container');


function createGrid(num){
    for(let i = 0; i < num; i++){
        const row_container = document.createElement("div");
        row_container.id = "row_container";
        

        for(let j = 0; j < num; j++){
            const box = document.createElement("div");

            box.id = "box";

            box.addEventListener('mouseover', () => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                box.style.backgroundColor = `rgb(${r},${g},${b})`;
            }, {once:true});

            box.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(box.style.opacity) || 0;
                if(currentOpacity < 1){
                    box.style.opacity = currentOpacity + 0.1;
                }
            });

            row_container.appendChild(box);
        }

        container.appendChild(row_container);

    }
}

createGrid(16);

//make button functionalities

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let num = prompt("Enter a number 1-100", "16");

    container.innerHTML ='';

    createGrid(num);
});



