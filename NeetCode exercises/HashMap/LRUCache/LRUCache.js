class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        
        // JavaScript particularity:    The map does not have information about recently accessed data, 
        //                              so it is necessary to remove and reinsert the item at the end of the hash, 
        //                              to make it the most recently used.
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }

    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity){
            const LRUKey = this.cache.keys().next().value;
            this.cache.delete(LRUKey);
        }
        
        this.cache.set(key, value);
    }
}
