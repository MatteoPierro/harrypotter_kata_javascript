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

xit("charges 15.20 euros for 2 different books",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);
    cart.add(SECOND_VOLUME);

	expect(cart.amount()).toBe(15.20);
});

const FIRST_VOLUME = "The Philosopher's Stone";
const SECOND_VOLUME = "Harry Potter and the Chamber of Secrets";

function Cart() {
    let books = [];

    return {
        add: (book) => {
            books.push(book);
        },
        amount: () => 8 * books.length
    };
}
