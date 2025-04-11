import { isFunction, useNegate } from '@mpietrucha/function'
import { isBasic, isEqual, isType } from '@mpietrucha/is-basic'
import { isClass, isInstanceOf } from '@mpietrucha/is-constructor'
import { useConfirm } from '@mpietrucha/value'

export const is = (source, value) => {
    if (isBasic(value)) {
        return isType(source, value)
    }

    if (isClass(value)) {
        return isInstanceOf(source, value)
    }

    if (isFunction(value)) {
        return useConfirm(value, source)
    }

    return isEqual(source, value)
}

export const not = useNegate(is)
