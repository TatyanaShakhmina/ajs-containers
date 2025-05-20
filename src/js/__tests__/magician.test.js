import Magician from '../magician';

test('создание Magician', () => {
  const unit = new Magician('Wizard');

  expect(unit).toEqual({
    name: 'Wizard',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Magician('W')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
