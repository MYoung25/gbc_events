import React from 'react'
import { useRouteData } from 'react-static'
import parse from 'html-react-parser';
import { Link } from 'components/Router'

import {
    Typography
} from "@material-ui/core";

export default function Event() {
  const { event } = useRouteData()
  return (
    <div>
      <Link to="/events/">{'<'} Back</Link>
      <br />
      <Typography variant={'h4'}>{event.post_title}</Typography>
      <Typography variant={'subtitle2'}>{event.StartDate} – {event.EndDate}</Typography>
        {
            parse(event.post_content)
        }
    </div>
  )
}
