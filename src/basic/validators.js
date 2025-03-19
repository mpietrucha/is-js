import {
    isArray,
    isBoolean,
    isEmpty,
    isFunction,
    isNull,
    isObject,
    isString,
    isUndefined,
} from 'lodash-es'

export {
    isArray,
    isBoolean,
    isEmpty,
    isFunction,
    isNull,
    isObject,
    isString,
    isUndefined,
}

export const useValidators = () => {
    return new Map([
        [null, isNull],
        [Array, isArray],
        [Object, isObject],
        [String, isString],
        [Boolean, isBoolean],
        [Function, isFunction],
        [undefined, isUndefined],
    ])
}
