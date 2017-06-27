import React from 'react'
import { Text } from '../../../../../../../components/text'
import Table from './components/table'

export default ({ members, ...props }) => (
  <Table>
    <tbody>
      {
        members.map((member) => (
          <tr>
            <td>
              <Text>{member.email}</Text>
            </td>
            <td>
              <Text>member</Text>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)
