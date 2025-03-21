import { is as isBasic } from '@mpietrucha/is-basic'
import { is as isConstructor } from '@mpietrucha/is-constructor'
import { isEqualWith } from 'lodash-es'

export const is = (source, value, handler) => {
    if (isBasic(value)) {
        return isBasic(source, value)
    }

    if (isConstructor(value)) {
        return isConstructor(source, value)
    }

    return isEqualWith(source, value, handler)
}
