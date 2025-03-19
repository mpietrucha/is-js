import { is } from '@constructor/is'
import { negate } from 'lodash-es'

export { is }

export const not = negate(is)
