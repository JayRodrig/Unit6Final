jest.mock('../../services/db');
const {getDbConn,} = require('../../services/db');

const {getComments, postComment,} = require('../../services/comments');

test('getComments returns getDbConn.any', done => {
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getComments('test')
        .then(_ => {
            expect(mockAny.mock.calls.length).toBe(1);
            expect(mockAny.mock.calls[0][1]).toEqual({show_id: 'test',});
            done();
        });
});

test('postComment returns getDbConn.oneOrNone', done => {
    const mockOneOrNone = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            oneOrNone: mockOneOrNone,
        }
    });

    postComment({
            comment_body: 1,
            user_id: 2,
            show_id: 3,
        })
        .then(_ => {
            expect(mockOneOrNone.mock.calls.length).toBe(1);
            done();
        });
});