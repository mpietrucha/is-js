import { is as isBasic } from '@basic'
import { is as isConstructor } from '@constructor'

export const is = (value, type) => {
    if (isBasic(type)) {
        return isBasic(value, type)
    }

    if (isConstructor(type)) {
        return isConstructor(value, type)
    }
}
