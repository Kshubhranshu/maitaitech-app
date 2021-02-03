const formatResponse = (success, response, errMsg) => {
    let res = {success: success};
    success ? res.result = response : res.errorMessage = errMsg;
    return res;
}

const successResponse = (data) => {
    return formatResponse(true, data, null);
}

const errorResponse = (msg) => {
    return formatResponse(false, {}, msg);
}

module.exports = {
    successResponse,
    errorResponse
}