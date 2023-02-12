import { exceptionError } from "../protocols/helpers/exception"

function badRequest(message: unknown) {
    return {
        statusCode: 400,
        body: message
    }
}

function ok(message: unknown) {
    return {
        statusCode: 200,
        body: message
    }
}

function created(data: unknown) {
    return {
        statusCode: 201,
        data: data
    }
}

function noContent(data: unknown) {
    return {
        statusCode: 204,
        body: data
    }
}

function exception(data: exceptionError) {
    const { message, statusCode } = data
    return {
        statusCode: statusCode ? statusCode : 500,
        body: message ? message : "Internal server error"
    }
}

function unauthorized(message: unknown) {
    return {
        statusCode: 401,
        body: message
    }
}

export {
    badRequest,
    ok,
    exception,
    unauthorized,
    noContent,
    created
}