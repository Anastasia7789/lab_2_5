// Функція міняє розмір картинки
function modifyImg() {
	const img = document.getElementById("id1");
	if (img.getAttribute("width") == 100) {
        img.setAttribute("width", "auto");
	} else {
		img.setAttribute("width", "100");
	}
}

// Добавляємо обробку події на картинку
const img = document.getElementById("id1");
img.addEventListener("click", modifyImg, false);

