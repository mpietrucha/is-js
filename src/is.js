import { isBasic } from '@mpietrucha/is-basic'
import { isConstructor } from '@mpietrucha/is-constructor'
import { isEqualWith, negate } from 'lodash-es'

export const is = (source, value, handler) => {
    if (isBasic(value)) {
        return isBasic(source, value)
    }

    if (isConstructor(value)) {
        return isConstructor(source, value)
    }

    return isEqualWith(source, value, handler)
}

export const not = negate(is)
