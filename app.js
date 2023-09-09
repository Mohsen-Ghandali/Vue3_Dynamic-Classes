const app = Vue.createApp({

    data() {
        return {
            showContainer: true,
            isFav: false,
            books: [
                {
                    bookName: "Honigtot",
                    bookImg: "./images/Honigtot.jpg",
                    authorName: " Hanni Münzer",
                    bookId: "97512348",
                    price: "22.00 €",
                },

                {
                    bookName: "Flammengeküsst",
                    bookImg: "./images/Flammengeküsst.jpg",
                    authorName: "Rebecca Yarros",
                    bookId: "75410398",
                    price: "18.00 €",
                },
                {
                    bookName: "Melody",
                    bookImg: "./images/melody.jpg",
                    authorName: "Martin Suter",
                    bookId: "46812794",
                    price: "14.00 €",
                }
            ]
        };
    },

    methods: {
        hideBtn() {
            this.showContainer = !this.showContainer;
        },
        changeFav(book) {
            book.isFav = !book.isFav;
        }

    }

})

app.mount("#app")
