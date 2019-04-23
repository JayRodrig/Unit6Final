jest.mock('../../services/db');
const {getDbConn,} = require('../../services/db');

const {getGenres,} = require('../../services/genres');

test('getGenres service function returns getDbConn.any', done => {
    const mockAny = jest.fn(() => Promise.resolve());
    getDbConn.mockImplementation(() => {
        return {
            any: mockAny,
        }
    });

    getGenres('')
        .then(_ => {
            expect(mockAny.mock.calls[0][0]).toBe(`select * from genres`);
            done();
        })
})