export default class LocalStorageManager {
    constructor(){
        
    }

    /** 
     * Finds an item in local storage by key.
     * @param {string} key - The key of the item to find.
     * @returns {object} - The item if found, otherwise null.
     */
    find(key) {
      const item = localStorage.getItem(key);
      if(item) {
        return JSON.parse(item)
      }
      return null
    }

    /** 
     * Finds an item in local storage by key.
     * @param {object} data - The key of the item to find.
     * @param {string} key - The key of the item to find.
     */
    insert(key,data) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    /** 
     * Finds an item in local storage by key.
     * @param {string} key - The key of the item to find.
     * @param {string} value - The key of the item to find.
     * @returns {void} - The item if found, otherwise null.
     */
    put(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * Deletes an item from local storage by key.
     * @param {string} key - The key of the item to delete.
     */

    delete(key){
      localStorage.removeItem(key);
    }

}