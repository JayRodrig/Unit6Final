jest.mock('express');

jest.mock('body-parser', () => {
    return {
        json: () => 'test',
    }    
});

jest.mock('../routes/users');
jest.mock('../routes/genres');
jest.mock('../routes/shows');
jest.mock('../routes/comments');

const {UserRouter,} = require('../routes/users');
const {GenreRouter,} = require('../routes/genres');
const {ShowRouter,} = require('../routes/shows');
const {CommentRouter,} = require('../routes/comments');

const express = require('express');
const bodyParser = require('body-parser');
const {getApp,} = require('../app');

test('getApp tests', done => {
    const mockUse = jest.fn();
    const mockApp = {
        use: mockUse,
    }
    
    express.mockImplementation(() => {
        return mockApp;
    })

    const app = getApp();
    expect(app).toEqual(mockApp);
    expect(mockUse.mock.calls.length).toBe(6);
    done();
})

/*
    test('just make it run, lol', done => {
    const mockUse = jest.fn();
    const mockApp = {
            use: mockUse,
        }
    express.mockImplementation(() => {
        return mockApp;
    })

    const app = getApp()
    expect(app).toEqual(mockApp)
    expect(mockUse.mock.calls.length).toBe(4)
    expect(mockUse.mock.calls[0][0]).toBe('bogus')
    expect(getUserRouter.mock.calls.length).toBe(1)
    expect(getListItemRouter.mock.calls.length).toBe(1)

    done()
})

*/