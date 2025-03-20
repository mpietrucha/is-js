import { isEmpty, useValidators } from '@basic/validators'

export const is = (source, ...parameters) => {
    const validators = useValidators()

    if (isEmpty(parameters)) {
        return validators.has(source)
    }

    const validator = parameters.shift()

    return is(validator) && validators.get(validator)(source)
}
