const { add, subtract, multiply, divide } = require("./math");

describe("add", () => {
  it("should expect 7 for addition of 3 and 4", () => {
    const expected = 7;
    const actual = add(3, 4);

    expect(actual).toEqual(expected);
  });

  it("should expect -7 for addition of -3 and -4", () => {
    const expected = -7;
    const actual = add(-3, -4);

    expect(actual).toEqual(expected);
  });

  it("should expect 20 for addition of 30 and -10", () => {
    const expected = 20;
    const actual = add(30, -10);

    expect(actual).toEqual(expected);
  });

  it("should expect 20 for addition of 20 and 0", () => {
    const expected = 20;
    const actual = add(20, 0);

    expect(actual).toEqual(expected);
  });
});

describe("subtract", () => {
  it("should expect 10 for subtraction of 20 and 10", () => {
    const expected = 10;
    const actual = subtract(20, 10);

    expect(actual).toEqual(expected);
  });

  it("should expect 1 for subtraction of -3 and -4", () => {
    const expected = 1;
    const actual = subtract(-3, -4);

    expect(actual).toEqual(expected);
  });

  it("should expect 40 for subtraction of 30 and -10", () => {
    const expected = 40;
    const actual = subtract(30, -10);

    expect(actual).toEqual(expected);
  });

  it("should expect 20 for subtraction of 20 and 0", () => {
    const expected = 20;
    const actual = subtract(20, 0);

    expect(actual).toEqual(expected);
  });
});

describe("multiply", () => {
  it("should expect 100 for multiplication of 10 and 10", () => {
    const expected = 100;
    const actual = multiply(10, 10);

    expect(actual).toEqual(expected);
  });

  it("should expect 0 for multiplication of 10 and 0", () => {
    const expected = 0;
    const actual = multiply(10, 0);

    expect(actual).toEqual(expected);
  });

  it("should expect 300 for multiplication of -30 and -10", () => {
    const expected = 300;
    const actual = multiply(-30, -10);

    expect(actual).toEqual(expected);
  });

  it("should expect -200 for multiplication of 20 and -10", () => {
    const expected = -200;
    const actual = multiply(20, -10);

    expect(actual).toEqual(expected);
  });
});

describe("divide", () => {
  it("should expect 10 for division of 100 and 10", () => {
    const expected = 10;
    const actual = divide(100, 10);

    expect(actual).toEqual(expected);
  });

  it("should expect -10 for division of -100 and 10", () => {
    const expected = -10;
    const actual = divide(-100, 10);

    expect(actual).toEqual(expected);
  });

  it("should expect -10 for division of 100 and -10", () => {
    const expected = -10;
    const actual = divide(100, -10);

    expect(actual).toEqual(expected);
  });

  it("should expect 0 for division of 0 and 10", () => {
    const expected = 0;
    const actual = divide(0, 10);

    expect(actual).toEqual(expected);
  });

  it("should expect 0 for division of 10 and 0", () => {
    const expected = Infinity;
    const actual = divide(10, 0);

    expect(actual).toEqual(expected);
  });
});
