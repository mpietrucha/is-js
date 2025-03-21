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
} from '@basic'

export { createNone, is as isNone, None, not as notNone } from '@none'

export { is as isConstructor, not as notConstructor } from '@constructor'

export { is }

export const not = negate(is)
