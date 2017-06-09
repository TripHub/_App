/* global it */

import React from 'react'
import { shallow } from 'enzyme'
import { testComponentFactory } from './'

export const smokeTest = (Component) => {
  it('renders without crashing', () => {
    const WrappedComponent = testComponentFactory(Component)
    shallow(<WrappedComponent />)
  })
}
