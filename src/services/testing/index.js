import React from 'react'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

// we need to wrap components in Styletron for them to test correctly with Jest
export const testComponentFactory = (Component) => (props) => (
  <StyletronProvider styletron={new Styletron()}>
    <Component {...props} />
  </StyletronProvider>
)
