import { isEmpty, useValidators } from '@basic/validators'

export const is = (value, ...parameters) => {
    const validators = useValidators()

    if (isEmpty(parameters)) {
        return validators.has(value)
    }

    return validators.get(parameters.shift())(value)
}
