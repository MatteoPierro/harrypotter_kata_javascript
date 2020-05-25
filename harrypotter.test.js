it("charges 8 euros for 1 book",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);

    expect(cart.amount()).toBe(8);
});

it("charges 16 euros for 2 of the same books",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(FIRST_VOLUME);

	expect(cart.amount()).toBe(16);
});

it("charges 15.20 euros for 2 different books",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(SECOND_VOLUME);

	expect(cart.amount()).toBe(15.20);
});

it("charges 21.60 euros for 3 different books", () => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(SECOND_VOLUME);
    cart.add(THIRD_VOLUME);

    expect(cart.amount()).toBe(21.60);
});

it("charges 24.00 euros for 3 the same books",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(FIRST_VOLUME);
    cart.add(FIRST_VOLUME);

	expect(cart.amount()).toBe(24.00);
});

it("charges 23.20 euros for 2 the same books and 1 different book",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(FIRST_VOLUME);
    cart.add(SECOND_VOLUME);

	expect(cart.amount()).toBe(23.20);
});

const FIRST_VOLUME = "The Philosopher's Stone";
const SECOND_VOLUME = "Harry Potter and the Chamber of Secrets";
const THIRD_VOLUME = "Harry Potter and the Prisoner of Azkaban";

function Cart() {
    let books = [];

    const calculateDiscount = (uniqueBooks) => {
        let discount = 1;

        if(uniqueBooks.size === 3){
            discount = 0.9;
        } else if(uniqueBooks.size === 2) {
            discount = 0.95;
        }

        return discount;
    }

    return {
        add: (book) => {
            books.push(book);
        },
        amount: () => {
            const uniqueBooks = new Set(books);

            let discount = calculateDiscount(uniqueBooks);

            let booksAtNormalPrice = books.length - uniqueBooks.size;
            let booksAtDiscountPrice = uniqueBooks.size;
            return 8 * booksAtNormalPrice + 8 * booksAtDiscountPrice  * discount;
        }
    };
}
