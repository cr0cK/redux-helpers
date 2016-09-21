const {
  replace,
  insertBefore, insertAfter,
  push, unshift,
} = require('../reducers');


describe('reducers', () => {
  describe('replace', () => {
    it('should replace a value at a specific index', () => {
      const collection = ['1', '2', '3'];
      const newCollection = replace(collection, value => value === '2', '2bis');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['1', '2bis', '3']);
    });

    it('should not replace a value if the predicate is always false', () => {
      const collection = ['1', '2', '3'];
      const newCollection = replace(collection, value => value === 'dontexit', '2bis');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['1', '2', '3']);
    });
  });

  describe('insertBefore', () => {
    it('should insert a value before an another in the collection', () => {
      const collection = ['1', '2', '3'];
      const newCollection = insertBefore(collection, value => value === '2', '1bis');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['1', '1bis', '2', '3']);
    });
  });

  describe('insertAfter', () => {
    it('should insert a value after an another in the collection', () => {
      const collection = ['1', '2', '3'];
      const newCollection = insertAfter(collection, value => value === '2', '2bis');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['1', '2', '2bis', '3']);
    });
  });

  describe('push', () => {
    it('should push a value at the end of the collection', () => {
      const collection = ['1', '2', '3'];
      const newCollection = push(collection, '4');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['1', '2', '3', '4']);
    });
  });

  describe('unshift', () => {
    it('should unshift a value at the beginning of the collection', () => {
      const collection = ['1', '2', '3'];
      const newCollection = unshift(collection, '0');

      expect(collection).toEqual(['1', '2', '3']);
      expect(newCollection).toEqual(['0', '1', '2', '3']);
    });
  });
});
