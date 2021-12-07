/* structures */

class book {
    constructor(
        title = 'unknown',
        author = 'unknown',
        pages = '0',
        isRead = false
    ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(newBook) {
        if(!this.alreadyExists(newBook)) {
            this.books.push(newBook)
        }
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
    getBook(title) {
        return this.books.find((book) => book.title ===newBook.title)
    }
    alreadyExists(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const library = new Library()

/* buttons and modals and messages */
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const errorMsg = document.getElementById('errorMsg')
const addBookForm = document.getElementById('addBookModal')




/*adding book form triggers */
const openAddBookModal = () => {
    addBookForm.reset()
    addBookModal.classList.add('active')
    overlay.classList.add('active')
}

/*event listeners */
addBookBtn.onclick = openAddBookModal
addBookForm.onsubmit = addBook