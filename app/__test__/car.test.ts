// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import supertest from 'supertest';
import * as app from '../index';

// Get Car by Id
describe('car', () => {
    describe('get car route', () => {
        describe('given the car does not exist', () => {
            it('should return a 404', async () => {
                const id = '1';
                await supertest(app).get(`/v1/cars/${id}`).
                expect(404);
            });
        });
    });
});

// Get Car
describe('car', () => {
    describe('get car route', () => {
        describe('given the car does not exist', () => {
            it('should return a 404', async () => {
                await supertest(app).get(`/v1/cars`).
                expect(404);
            });
        });
    });
});

// Create Car
describe('car', () => {
    describe('get car route', () => {
        describe('given the car does not exist', () => {
            it('should return a 404', async () => {
                await supertest(app).post(`/v1/cars`).
                expect(404);
            });
        });
    });
});

// Edit Car by Id
describe('car', () => {
    describe('get car route', () => {
        describe('given the car does not exist', () => {
            it('should return a 404', async () => {
                const id = '2';
                await supertest(app).put(`/v1/cars/${id}`).
                expect(404);
            });
        });
    });
});


// Delete Car by Id
describe('car', () => {
    describe('get car route', () => {
        describe('given the car does not exist', () => {
            it('should return a 404', async () => {
                const id = '3';
                await supertest(app).delete(`/v1/cars/${id}`).
                expect(404);
            });
        });
    });
});