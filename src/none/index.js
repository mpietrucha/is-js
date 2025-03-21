import { is } from '@none/is'
import { negate } from 'lodash-es'

export { createNone, None } from '@none/value'

export { is }

export const not = negate(is)
