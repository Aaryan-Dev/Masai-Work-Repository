// - Below 2,50,000 no tax
// - Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
// - Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
// - Amount earned above 10,00,000 - 30% of the amount earned in this slab

let tax = (val) => {
  if (val < 250000) {
    return "no tax";
  } else if (val >= 250000 && val < 500000) {
    return Math.round(val / 10);
  } else if (val >= 500000 && val < 1000000) {
    return Math.round(val / 20);
  } else return Math.round(val / 30);
};

describe("Test_Tax", () => {
  test("tax", () => {
    expect(tax(35000)).toBe("no tax");
  });

  test("tax", () => {
    expect(tax(300000)).toBe(30000);
  });

  test("tax", () => {
    expect(tax(700000)).toBe(Math.round(700000 / 20));
  });

  test("tax", () => {
    expect(tax(15000000)).toBe(1500000 / 3);
  });
});
