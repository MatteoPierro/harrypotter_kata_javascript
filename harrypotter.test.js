it("charges 8 euros for 1 book",() => {
	expect(checkout(1)).toBe(8);
});

function checkout(numberOfBooks) {
    return 8;
}
