import { is } from '@none/is'
import { negate } from 'lodash-es'

export { createNone as none } from '@none/value'

export { is }

export const not = negate(is)
