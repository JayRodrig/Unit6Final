jest.mock('../../services/db');
const {getDbConn,} = require('../../services/db');

const {getUsers, getUser, postUser,} = require('../../services/users');

test('getUsers returns getDbConn.any', done => {
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getUsers()
        .then(_ => {
            expect(mockAny.mock.calls.length).toBe(1);
            expect(mockAny.mock.calls[0][0]).toBe(    `select * from users`);
            done();
        });
});

test('getUser returns getDbConn.one', done => {
    const mockOne = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            one: mockOne,
        }
    });

    getUser('test')
        .then(_ => {
            expect(mockOne.mock.calls.length).toBe(1);
            expect(mockOne.mock.calls[0][1]).toEqual({id: 'test'});
            done();
        });
});

test('postUser returns getDbConn.oneOrNone', done => {
    const mockOneOrNone = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            oneOrNone: mockOneOrNone,
        }
    });

    postUser({
            username: 1,
        })
        .then(_ => {
            expect(mockOneOrNone.mock.calls.length).toBe(1);
            done();
        });
});