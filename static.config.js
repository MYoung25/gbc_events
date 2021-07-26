import path from 'path'
import { nanoid } from 'nanoid'

export default {
  getRoutes: async () => {
    // let events = [ ...require('./src/data/Events.json').reverse(), ...require('./src/data/Legacy_events.json').reverse()]
    let events = require('./src/data/Events_merged.json')

    events = events.map(e => ({...e, id: nanoid() }))

    return [
      {
        path: '/events',
        getData: () => ({
          events,
        }),
        children: events.map(event => ({
          path: `/event/${event.id}`,
          template: 'src/containers/Event',
          getData: () => ({
            event,
          }),
        })),
      },
    ]
  },
  plugins: [
    'jss-provider',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
