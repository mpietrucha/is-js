import { is as isBasic } from '@basic'
import { is as isConstructor } from '@constructor'

export const is = (source, value) => {
    if (isBasic(value)) {
        return isBasic(source, value)
    }

    if (isConstructor(value)) {
        return isConstructor(source, value)
    }

    return source === value
}
