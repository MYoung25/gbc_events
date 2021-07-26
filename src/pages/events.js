import React from 'react'
import { useRouteData } from 'react-static'
import { Typography } from "@material-ui/core";
import { Link } from 'components/Router'

export default function Events() {
  const { events } = useRouteData()
  return (
    <div>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Events:
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/event/${event.id}`}>{event.post_title}</Link>
              <Typography>{event?.category}</Typography>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
