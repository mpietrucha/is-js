import { createNone } from '@none/value'

export const is = value => {
    return isConstructor(value, createNone())
}
