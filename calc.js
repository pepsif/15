let diametr = document.querySelector('.diameter');
let depth = document.querySelector('.depth');
let calcButton = document.querySelector(".calc-button");

function calculateVolumeFromDiameter() {
    // Отримуємо значення в сантиметрах
    let diameterCm = parseFloat(diametr.value);
    let heightCm = parseFloat(depth.value);

    // Перевірка на некоректний ввід
    if (isNaN(diameterCm) || isNaN(heightCm)) {
        console.log("Будь ласка, введіть числові значення в сантиметрах.");
        return;
    }

    // Переводимо см → м
    let diameter = diameterCm / 100;
    let height = heightCm / 100;

    const radius = diameter / 2;
    const volume = Math.PI * Math.pow(radius, 2) * height;

    console.log(`Обʼєм стовпа: ${volume.toFixed(3)} м³`);
}

// Прив’язуємо функцію до кнопки
calcButton.addEventListener("click", calculateVolumeFromDiameter);
