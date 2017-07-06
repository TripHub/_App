import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../../../../components/text'
import Table from './components/table'

const Members = ({ members, ...props }) => (
  <Table>
    <tbody>
      {members.map((member) => (
        <tr key={member.id}>
          <td>
            <Text>{member.email}</Text>
          </td>
          <td>
            <Text>member</Text>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object)
}

Members.defaultProps = {
  members: []
}

export default Members
