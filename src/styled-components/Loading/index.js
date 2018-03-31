import React from 'react';

import LoadingWrapper from './LoadingWrapper';
import Icon from './Icon';

export default class Loading extends React.Component {
    render() {
        const isFetching = this.props.isFetching;

        if (!isFetching) {
            return null;
        }

        return (
            <LoadingWrapper>
                <Icon className="fa fa-glass" style={{animationDelay: '.1s'}} />
                <Icon className="fa fa-birthday-cake" style={{animationDelay: '.3s'}} />
                <Icon className="fa fa-music" style={{animationDelay: '.5s'}} />
                <Icon className="fa fa-ticket"  style={{animationDelay: '.7s'}} />
            </LoadingWrapper>
        );
    }
}
