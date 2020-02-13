
import { runQuery } from '@forrestjs/feature-network'
// import queries from './graphql'

export const exampleQuery = (message) => async (dispatch) => {
    console.log(message)
    const query = `
        query q1 ($message: String) {
            exampleQuery (message: $message)
        }
    `
    const res = await dispatch(runQuery(query, {
        payload: { message },
    }))

    return res.data.exampleQuery
}

export const start = () => async (dispatch, getState) => {
    try {
        const res = await dispatch(exampleQuery('testing query'))
        console.log(res)
    } catch (err) {
        console.log(err.message)
    }
}
