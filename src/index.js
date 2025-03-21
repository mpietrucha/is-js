import { is } from '@/is'
import { negate } from 'lodash-es'

export {
    isArray,
    is as isBasic,
    isBoolean,
    isEmpty,
    isFunction,
    isNull,
    isObject,
    isString,
    isUndefined,
    notArray,
    not as notBasic,
    notBoolean,
    notEmpty,
    notFunction,
    notNull,
    notObject,
    notString,
    notUndefined,
} from '@mpietrucha/is-basic'

export { createNone, is as isNone, not as notNone } from '@mpietrucha/none'

export {
    is as isConstructor,
    not as notConstructor,
} from '@mpietrucha/is-constructor'

export { is }

export const not = negate(is)
