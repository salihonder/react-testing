test("mock sum adds 4 + 2 to equal 6", () => {
    const sum = jest.fn();

    let result = sum(4, 2);

    expect(result).toBeUndefined();
    expect(sum).toHaveBeenCalled();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(4, 2);
});
