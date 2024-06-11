const field = document.querySelector(".field");
const shuffleButton = document.querySelector(".shuffle");
const counter = document.querySelector(".count");

// --CREATE ARRAY DIGITS and Field --
let cellArr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// MOVE COUNTER

let count = 0;

// --CREATE FIELD --

cellArr.forEach((item, index) => {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = item;

    if (item === 0) {
        cell.textContent = "";
    }

    field.appendChild(cell);
});


// --CHANGE ARR CLick element with ZERO element --

function swap(zeroIndex, clickIndex) {

    // --validClick Array--
    const validClickArr = [ [1, 3], [0, 2, 4], [1, 5],
                     [0, 4, 6], [1, 3, 5, 7], [2, 4, 8],
                     [3, 7], [4, 6, 8], [5, 7] ];

    if (validClickArr[clickIndex].indexOf(zeroIndex) >= 0) {

        let temp = cellArr[clickIndex];
        cellArr[clickIndex] = 0;
        cellArr[zeroIndex] = temp;

        drawElements();
        console.log(validClickArr[clickIndex].indexOf(zeroIndex), "valid")

        count +=1
        counter.textContent = count;
        console.log(counter.textContent);
    }
}

// ---RENDER FIELD --

function drawElements() {

    // --Delete old DOm elements --

    for (let i = 0; i < cellArr.length; i++) {
        field.children[field.children.length - 1].remove();
    }

    // --Add in DOM new elements Arr --

    cellArr.forEach((item, index) => {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = item;

       counter.textContent = 0;
        if (item === 0) {
            cell.textContent = "";
        }

        field.appendChild(cell);
    });


    testWin();

}

   // ADD Listener click In FIELD

field.addEventListener("click", function (event) {
    const ClickIndex = cellArr.indexOf(Number(event.target.textContent));

    swap(cellArr.indexOf(0), ClickIndex);
});

shuffleButton.addEventListener("click",shuffle);

// --SHUFFLE ARRAY ---

function shuffle() {
    cellArr.sort(() => Math.random() - 0.5);
    count = 0;

    drawElements()

    console.log(counter.textContent)
}

// --test for a winning combination --

function testWin() {
    const winArr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

    if ( JSON.stringify(cellArr) === JSON.stringify(winArr) ) {
        // console.log(cellArr,"You Win");
        let winMessage = document.createElement("h3");
        winMessage.className = "win-message";
        winMessage.textContent = "Ви Виграли!!!"
        document.body.prepend(winMessage)
    }

}
