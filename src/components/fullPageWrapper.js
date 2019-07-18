import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage'

export default FullpageWrapper = fullpageProps => {
    return (
        <ReactFullpage
            {...fullpageProps}
            render={({state, fullpageApi, children}) => {
                return (children)
            }}
        />
    )
}