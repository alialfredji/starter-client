import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { FoocodingEp1 } from 'features/feature-ep1'

export default () => (
    <Switch>
        <Route exact path="/" component={FoocodingEp1} />
    </Switch>
)
