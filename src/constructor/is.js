import { isEmpty, isFunction } from '@basic'

export const is = (source, ...parameters) => {
    if (isEmpty(parameters)) {
        return isFunction(source)
    }

    const constructor = parameters.shift()

    return is(constructor) && source instanceof constructor
}
