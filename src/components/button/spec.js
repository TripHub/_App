/* global it */

import React from 'react'
import { shallow } from 'enzyme'
import { testComponentFactory } from '../../services/testing'
import Button from './'

// smoke test
it('renders without crashing', () => {
  const Component = testComponentFactory(Button)
  shallow(<Component />)
})
