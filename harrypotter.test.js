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

it("charges 25.60 euros for 4 different books", () => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(SECOND_VOLUME);
    cart.add(THIRD_VOLUME);
    cart.add(FOURTH_VOLUME);

    expect(cart.amount()).toBe(25.60);
});

const FIRST_VOLUME = "The Philosopher's Stone";
const SECOND_VOLUME = "Harry Potter and the Chamber of Secrets";
const THIRD_VOLUME = "Harry Potter and the Prisoner of Azkaban";
const FOURTH_VOLUME = "Harry Potter and the Goblet of Fire";

function Cart() {
    const books = [];

    const calculateDiscount = (uniqueBooks) => {
        let discount = 1;

        if (uniqueBooks.size === 2){
            discount = 0.95;
        } else if(uniqueBooks.size === 3) {
            discount = 0.9;
        } else if (uniqueBooks.size === 4) {
            discount = 0.8;
        }

        return discount;
    }

    return {
        add: (book) => {
            books.push(book);
        },
        amount: () => {
            const uniqueBooks = new Set(books);

            const discount = calculateDiscount(uniqueBooks);

            const booksAtNormalPrice = books.length - uniqueBooks.size;
            const booksAtDiscountPrice = uniqueBooks.size;
            return 8 * booksAtNormalPrice +
                   8 * booksAtDiscountPrice * discount;
        }
    };
}
