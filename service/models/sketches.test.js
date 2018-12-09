'use strict';

const Sketches = require('./sketches');

describe('sketches model', () => {
    it('should invalidate if the id field is not included', () => {
        const s = new Sketches({
            sketches: []
        });

        s.validate(error => {
            expect(error.errors.id).toBeTruthy();
        });
    });

    it('should invalidate if the id field is not a number', () => {
        [null, {}].forEach(id => {
            const s = new Sketches({
                id,
                sketches: []
            });

            s.validate(error => {
                expect(error.errors.id).toBeTruthy();
            });
        });
    });

    it('should validate if the sketches field is undefined', () => {
        const s = new Sketches({
            id: 1
        });

        s.validate(error => {
            expect(error).toBeNull();
        });
    });

    it('should validate if id and sketches fields are populated with their required type', () => {
        const s = new Sketches({
            id: 1,
            sketches: []
        });

        s.validate(error => {
            expect(error).toBeNull();
        });
    });
});