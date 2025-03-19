import { is } from '@basic/is'
import {
    isArray,
    isBoolean,
    isEmpty,
    isFunction,
    isNull,
    isObject,
    isString,
    isUndefined,
} from '@basic/validators'
import { negate } from 'lodash-es'

export {
    is,
    isArray,
    isBoolean,
    isEmpty,
    isFunction,
    isNull,
    isObject,
    isString,
    isUndefined,
}

export const not = negate(is)

export const notNull = negate(isNull)

export const notArray = negate(isArray)

export const notEmpty = negate(isEmpty)

export const notObject = negate(isObject)

export const notString = negate(isString)

export const notBoolean = negate(isBoolean)

export const notFunction = negate(isFunction)

export const notUndefined = negate(isUndefined)
