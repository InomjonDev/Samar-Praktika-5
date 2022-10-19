window.addEventListener("DOMContentLoaded", () => {
	const title = document.querySelector("#title"),
		author = document.querySelector("#author"),
		year = document.querySelector("#year"),
		btn = document.querySelector(".btn"),
		bookList = document.querySelector("#book-list")

	btn.addEventListener("click", function (event) {
		event.preventDefault()

		// Basic validation
		if (title.value == "" && author.value == "" && year.value == "") {
			alert("Iltimos ma`lumotlarni kiriting.")
		} else {
			const newRow = document.createElement("tr")

			// Creating new title
			const newTitle = document.createElement("th")
			newTitle.innerHTML = title.value
			newRow.appendChild(newTitle)

			// Creating new author
			const newAuthor = document.createElement("th")
			newAuthor.innerHTML = author.value
			newRow.appendChild(newAuthor)
			// Creating new year
			const dataYear = document.createElement("th")
			dataYear.innerHTML = year.value
			newRow.appendChild(dataYear)

			// Displaying in Ui
			bookList.appendChild(newRow)

			title.value = ""
			author.value = ""
			year.value = ""
		}
	})
})
