import { is as isConstructor } from '@constructor'
import { createNone } from '@none/value'

export const is = value => {
    return isConstructor(value, createNone())
}
