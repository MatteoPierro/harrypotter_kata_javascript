it("charges 8 euros for 1 book",() => {
    const cart = Cart();

    cart.add(FIRST_VOLUME);

    expect(cart.amount()).toBe(8);
});

it("charges 16 euros for 2 of the same books",() => {
	expect(checkout(2)).toBe(16);
});

const FIRST_VOLUME = "The Philosopher's Stone";

function Cart() {
    return {
        add: (book) => {},
        amount: () => 8
    };
}

function checkout(numberOfBooks) {
    return numberOfBooks * 8;
}
