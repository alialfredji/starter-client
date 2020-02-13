import createState from '@subnik/react-redux-client/lib/create-state'

const reducers = {}

const features = [
    require('@forrestjs/feature-storage/client'),
    require('@forrestjs/feature-network/client'),
    // require('features/feature-links'),
]

export default createState(reducers, features)
