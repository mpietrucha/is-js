import { isFunction, useNegate } from '@mpietrucha/function'
import { isBasic, isType } from '@mpietrucha/is-basic'
import { isClass, isInstanceOf } from '@mpietrucha/is-constructor'
import { confirm } from '@mpietrucha/value'
import { isEqual } from 'lodash-es'

export const is = (source, value) => {
    if (isBasic(value)) {
        return isType(source, value)
    }

    if (isClass(value)) {
        return isInstanceOf(source, value)
    }

    if (isFunction(value)) {
        return confirm(value, source)
    }

    return isEqual(source, value)
}

export const not = useNegate(is)
