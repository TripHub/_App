import { styled } from 'styletron-react'
import { opacity } from '../../../../../../../../../common/style';

export default styled('div', ({ loading }) => ({
  opacity: loading ? opacity.disabled : 1
}))
