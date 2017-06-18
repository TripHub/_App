import React from 'react'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

/**
 * We need to wrap components with Styletron's <Provider /> for them to work
 * correctly with Jest.
 * @param Component {React.Component|function} - The React component to test
 * */
export const testComponentFactory = (Component) => (props) => (
  <StyletronProvider styletron={new Styletron()}>
    <Component {...props} />
  </StyletronProvider>
)
