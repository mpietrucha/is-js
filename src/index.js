import { is } from '@/is'
import { negate } from 'lodash-es'

export { is as isBasic, not as notBasic } from '@basic'

export { is as isNone, none, not as notNone } from '@none'

export { is as isConstructor, not as notConstructor } from '@constructor'

export { is }

export const not = negate(is)
