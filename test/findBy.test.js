import findBy from '../src/js/findBy';

const DB = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('test 1', () => {
  const finder = findBy('name', 'урон');
  const received = DB.filter(finder);
  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];
  expect(received).toEqual(expected);
});

test('test 2', () => {
  const finder = findBy('type', 'character');
  const received = DB.filter(finder);
  const expected = [{
    name: 'маг',
    type: 'character',
    description: 'Персонаж, обладающий магическими способностями',
  }];
  expect(received).toEqual(expected);
});

test('test 3', () => {
  const finder = findBy('description', 'Атака магическим заклинанием');
  const received = DB.filter(finder);
  const expected = [{
    name: 'заклинание',
    type: 'attack',
    description: 'Атака магическим заклинанием',
  }];
  expect(received).toEqual(expected);
});

test('test 4', () => {
  const finder = findBy('page', 'Атака магическим заклинанием');
  const received = DB.filter(finder);
  const expected = [];
  expect(received).toEqual(expected);
});

test('test 4', () => {
  const finder = findBy('name', 'снаряжение');
  const received = DB.filter(finder);
  const expected = [];
  expect(received).toEqual(expected);
});

test('test 4', () => {
  const finder = findBy('name', 'снаряжение');
  const received = [].filter(finder);
  const expected = [];
  expect(received).toEqual(expected);
});
