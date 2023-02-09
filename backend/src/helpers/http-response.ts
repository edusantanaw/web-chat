
function badRequest(message: unknown){
    return {
        statusCode: 400,
        body: message
    }
}

function success(message: unknown){
    return {
        statusCode: 200,
        body: message
    }
}

function noContent(data: unknown){
    return {
        statusCode: 204,
        body: data
    }
}

function exception(message: unknown){
    return {
        statusCode: 400,
        body: message
    }
}

function unathorized(message: unknown){
    return {
        statusCode: 401,
        body: message
    }
}

export  {
    badRequest,
    success,
    exception,
    unathorized,
    noContent
}