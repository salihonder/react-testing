import * as math from '../../Math'

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  math.add(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  math.subtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

