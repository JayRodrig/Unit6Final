jest.mock('../../services/db');
const {getDbConn,} = require('../../services/db');

const {getShows, getShowByGenre, getShowByUser, getShow, postShow} = require('../../services/shows');

test('getShows returns getDbConn.any', done => {
    mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getShows()
        .then(_ => {
            expect(mockAny.mock.calls.length).toBe(1);
            done();
        });
});

test('getShowByGenre returns getDbConn.any', done => {
    mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getShowByGenre(1)
        .then(_ => {
            expect(mockAny.mock.calls.length).toBe(1);
            expect(mockAny.mock.calls[0][1]).toEqual({genre_id: 1,});
            done();
        });
});

test('getShowByUser returns getDbConn.one', done => {
    mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getShowByUser(1)
        .then(_ => {
            expect(mockAny.mock.calls.length).toBe(1);
            expect(mockAny.mock.calls[0][1]).toEqual({user_id: 1,});
            done();
        });
});

test('getShow returns getDbConn.one', done => {
    mockOne = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            one: mockOne,
        }
    });

    getShow(1)
        .then(_ => {
            expect(mockOne.mock.calls.length).toBe(1);
            expect(mockOne.mock.calls[0][1]).toEqual({id: 1,});
            done();
        });
});

test('postShow returns getDbConn.one', done => {
    mockOneOrNone = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            oneOrNone: mockOneOrNone,
        }
    });

    postShow({
            title: 1,
            img_url: 2,
            user_id: 3,
            genre_id: 4,
        })
        .then(_ => {
            expect(mockOneOrNone.mock.calls.length).toBe(1);
            done();
        });
});



