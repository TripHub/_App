/**
 * The Page component justs adds spacing at the top to separate page content
 * from the menu bar.
 */

import { styled } from 'styletron-react'
import { spacing } from '../../common/style'

export default styled('div', {
  marginTop: spacing.sd
})
