const CONSTANTS = require('./constants');
const {
    DB_ENDPOINT,
    MONGO_DEV_URL,
    MONGO_ENDPOINT
} = CONSTANTS;

describe('URL parts', () => {
    it('should match "songbird_db"', () => {
        expect(DB_ENDPOINT).toBe('songbird_db');
    });

    it('should match "mongodb://localhost:27017/"', () => {
        expect(MONGO_DEV_URL).toBe('mongodb://localhost:27017/');
    });

    it('should match  MONGO_DEV_URL + DB_ENDPOINT', () => {
        expect(MONGO_ENDPOINT).toBe(MONGO_DEV_URL + DB_ENDPOINT);
    });
});
