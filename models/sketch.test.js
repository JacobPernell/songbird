'use strict';

const Sketch = require('./sketch');

describe('sketch model', () => {
    it('should invalidate if length is undefined', () => {
        const s = new Sketch({
            octave: 1,
            pitch: 'a'
        });

        s.validate(error => expect(error.errors.length).toBeTruthy());
    });

    it('should invalidate if length is not a number', () => {
        const s = new Sketch({
            length: {},
            octave: 1,
            pitch: 'a'
        });

        s.validate(error => expect(error.errors.length).toBeTruthy());
    });

    it('should invalidate if octave is undefined', () => {
        const s = new Sketch({
            length: 0.25,
            pitch: 'a'
        });

        s.validate(error => expect(error.errors.octave).toBeTruthy());
    });

    it('should invalidate if octave is not a number', () => {
        const s = new Sketch({
            length: 0.25,
            octave: {},
            pitch: 'a'
        });

        s.validate(error => expect(error.errors.octave).toBeTruthy());
    });

    it('should invalidate if pitch is undefined', () => {
        const s = new Sketch({
            length: 0.25,
            octave: 1
        });

        s.validate(error => expect(error.errors.pitch).toBeTruthy());
    });

    it('should invalidate if pitch is not a string', () => {
        const s = new Sketch({
            length: 0.25,
            octave: 1,
            pitch: {}
        });

        s.validate(error => expect(error.errors.pitch).toBeTruthy());
    });

    it('should validate if all fields exist as their expected types', () => {
        const s = new Sketch({
            length: 0.25,
            octave: 1,
            pitch: 'a'
        });

        s.validate(error => expect(error).toBeNull());
    });
});