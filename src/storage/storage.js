/**
 * Storage abstraction
 * Import value NOT a class
 * Usage: import { storage } from './storage/storage';
 *   storage.set('num', 21);
 *   storage.set('string', 'this is a string');
 *   storage.set('object', {
 *     prop: 'value',
 *   });
 *
 *   const num = storage.get('num');
 *   const string = storage.get('string');
 *   const object = storage.get('object');
 */
class StorageService {
  #PREFIX_KEY = 'your-energy';

  set(key, value) {
    localStorage.setItem(this.#composeKey(key), JSON.stringify(value));
  }

  get(key) {
    try {
      return JSON.parse(localStorage.getItem(this.#composeKey(key)));
    } catch (e) {
      return null;
    }
  }

  remove(key) {
    localStorage.removeItem(this.#composeKey(key));
  }

  clear() {
    localStorage.clear();
  }

  #composeKey(key) {
    return `${this.#PREFIX_KEY}.${key}`;
  }
}

export const storage = new StorageService();
