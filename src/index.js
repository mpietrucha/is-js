import { is } from '@/is'
import { negate } from 'lodash-es'

export {
    is,
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

export { is as isConstructor, not as notConstructor } from '@constructor'

export const not = negate(is)
