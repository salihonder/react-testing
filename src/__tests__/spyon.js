import * as math from '../../Math'

test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    expect(math.add(1, 2)).toEqual(3);

    // other functions keep the original implmentation
    expect(math.multiply(4, 5)).toEqual(20);
    expect(math.subtract(4, 5)).toEqual(-1);
    expect(math.divide(12, 4)).toEqual(3);

    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("override and restore calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(math.add(3, 4)).toEqual("mock");

    // restore the original implementation
    addMock.mockRestore();
    expect(math.add(3, 4)).toEqual(7);
});