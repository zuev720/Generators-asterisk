import canIterate from '../canIterate';

it('Функция должна возвращать правильные значения', () => {
  expect(canIterate(new Map())).toBe(true);
  expect(canIterate(new Set())).toBe(true);
  expect(canIterate(null)).toBe(false);
  expect(canIterate(10)).toBe(false);
  expect(canIterate('Netology')).toBe(true);
});
