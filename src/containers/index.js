import React, { Component } from 'react';

import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./Counter'),
    loading: () => {
        return <div>loading</div>;
    }
});

export default class IndexContainer extends React.Component {
    render() {
        return <LoadableComponent />;
    }
}
