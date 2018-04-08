import React from 'react';
import faGlassMartini from '@fortawesome/fontawesome-free-solid/faGlassMartini';
import faBirthdayCake from '@fortawesome/fontawesome-free-solid/faBirthdayCake';
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic';
import faTicketAlt from '@fortawesome/fontawesome-free-solid/faTicketAlt';

import LoadingWrapper from './LoadingWrapper';
import FaIcon from '../FaIcon';

export default class Loading extends React.Component {
  render() {
    return (
      <LoadingWrapper>
        <FaIcon icon={faGlassMartini} animation="inAndOut" style={{animationDelay: '.1s'}} />
        <FaIcon icon={faBirthdayCake} animation="inAndOut" style={{animationDelay: '.3s'}} />
        <FaIcon icon={faMusic} animation="inAndOut" style={{animationDelay: '.5s'}} />
        <FaIcon icon={faTicketAlt} animation="inAndOut" style={{animationDelay: '.7s'}} />
      </LoadingWrapper>
    );
  }
}
