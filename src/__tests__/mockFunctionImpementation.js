test("mock implementation", () => {
    const add = jest.fn().mockImplementation(() => 6);
  
    expect(add(4,2)).toBe(6);
  });
  
  test("mock implementation one time", () => {
    const add = jest.fn().mockImplementationOnce(() => 6);
  
    expect(add(4,2)).toBe(6);
  
    expect(add(4,2)).toBe(undefined);
  });
  
  test("mock return value", () => {
    const add = jest.fn();
    add.mockReturnValue(6);
  
    expect(add(4,2)).toBe(6);
  });
  
  test("mock promise resolution", () => {
    const add = jest.fn();
    add.mockResolvedValue(6);
  
    expect(add(4,2)).resolves.toBe(6);
  });
  