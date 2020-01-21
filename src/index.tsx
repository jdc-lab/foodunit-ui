import 'tslib'

import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import { configure } from 'mobx'
import { App } from './app'
import {AuthStore} from "./store/authStore"
import {Provider} from "mobx-react"

// enforce the strict mode for actions -> e.g. no state modifying inside of promise without action decorator https://www.leighhalliday.com/mobx-async-actions
configure({ enforceActions: "always" })

const root = document.getElementById('app-root')
const url = root.getAttribute('config-url')

export interface Config {
    apiUrl: string
}

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
        const authStore = new AuthStore(config)
        ReactDOM.render(
            <Provider authStore={authStore}>
                <App />
            </Provider>, root)
    } else {
        ReactDOM.render(<div>No config</div>, document.getElementById('root'))
    }
}

run().then(() => {
    console.log("started")
})


