import { isEmpty, isFunction } from '@basic'

export const is = (value, ...parameters) => {
    if (isEmpty(parameters)) {
        return isFunction(value)
    }

    const constructor = parameters.shift()

    return is(constructor) && value instanceof constructor
}
