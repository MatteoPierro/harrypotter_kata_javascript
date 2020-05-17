it("charges 8 euros for 1 book",() => {
	expect(checkout(1)).toBe(8);
});

it("charges 16 euros for 2 of the same books",() => {
	expect(checkout(2)).toBe(16);
});

function checkout(numberOfBooks) {
    return numberOfBooks * 8;
}
