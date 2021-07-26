import React from 'react'
import { Link } from 'components/Router'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to Give Back Cincinnati's Event log</h1>
    <Link to={'/events'}>Events List</Link>
  </div>
)
