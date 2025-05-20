import Daemon from '../daemon';

test('создание Daemon', () => {
  const unit = new Daemon('Aura');

  expect(unit).toEqual({
    name: 'Aura',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('ошибка при длине имени', () => {
  expect(() => new Daemon('A')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});
