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

const FIRST_VOLUME = "The Philosopher's Stone";

function Cart() {
    let numberOfBooks = 0;

    return {
        add: (book) => {
            numberOfBooks++;
        },
        amount: () => 8 * numberOfBooks
    };
}
