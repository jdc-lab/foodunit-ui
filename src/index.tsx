import 'tslib'

import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import { configure } from 'mobx'
import { App, Config } from './app'

// enforce the strict mode for actions -> e.g. no state modifying inside of promise without action decorator https://www.leighhalliday.com/mobx-async-actions
configure({ enforceActions: "always" })

const root = document.getElementById('app-root')
const url = root.getAttribute('config-url')

/**
 * loads config and starts the app with it
 * @returns {Promise<void>}
 */
async function run() {
    let config = await Axios.get(url).then(response => {
        return response.data
    }).catch(error => {
        console.log("error loading config " + error)
    })

    if (config) {
        ReactDOM.render(<App config={config} />, root)
    } else {
        ReactDOM.render(<div>No config</div>, document.getElementById('root'))
    }
}

run().then(() => {
    console.log("started")
})


