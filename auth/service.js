const util = require('../common/util');

async function authenticate(reqData, callback) {
    const password = reqData.password;
    let result;
    if (password === '1') {
        result = 'Hello World';
    } else {
        result = 'Wrong Password';
    }
    callback(util.successResponse(result));
}

module.exports = {
    authenticate
}