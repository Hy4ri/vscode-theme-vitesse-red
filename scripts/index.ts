import fs from 'fs-extra'
import getTheme from './theme'
import { getXtermTheme } from './extra'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/m57.json',
      getTheme({
        color: 'dark',
        name: 'm57',
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-m57-red.json',
      getXtermTheme({
        color: 'dark',
        name: 'M57',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
