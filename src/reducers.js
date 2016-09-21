// @flow

import findIndex from 'lodash/findIndex';


/**
 * Replace a value where the predicate function returns truthy.
 */
export function replace<V>(
  collection:Array<V>, predicate: Function, value: V
): Array<V> {
  const _collection = collection.slice(0);
  const idx = findIndex(_collection, predicate);

  if (idx > 0) {
    _collection.splice(idx, 1, value);
  }

  return _collection;
}

/**
 * Insert a value before where the predicate function returns truthy.
 */
export function insertBefore<V>(
  collection:Array<V>, predicate: Function, value: V
): Array<V> {
  const _collection = collection.slice(0);
  const idx = findIndex(_collection, predicate);

  if (idx > 0) {
    _collection.splice(idx, 0, value);
  }

  return _collection;
}

/**
 * Insert a value after where the predicate function returns truthy.
 */
export function insertAfter<V>(
  collection:Array<V>, predicate: Function, value: V
): Array<V> {
  const _collection = collection.slice(0);
  const idx = findIndex(_collection, predicate);

  if (idx > 0 && idx <= _collection.length) {
    _collection.splice(idx + 1, 0, value);
  }

  return _collection;
}

/**
 * Add a value at the end of the collection.
 */
export function push<V>(collection:Array<V>, value:V): Array<V> {
  const _collection = collection.slice(0);
  _collection.push(value);
  return _collection;
}

/**
 * Add a value at the beginning of the collection.
 */
export function unshift<V>(collection:Array<V>, value:V): Array<V> {
  const _collection = collection.slice(0);
  _collection.unshift(value);
  return _collection;
}
