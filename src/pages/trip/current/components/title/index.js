import { styled } from 'styletron-react'
import { Title } from '../../../../../components/text'

export default styled(Title, ({ loading }) => ({
  opacity: loading ? 0.4 : 1
}))
