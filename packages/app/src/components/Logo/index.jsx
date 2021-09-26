import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import styled from 'styled-components';

const Containter = styled.div`
  a.link {
    margin-left: 14px;
    &.cur {
      color: #35a5a6;
    }
  }
`;

@inject('store')
@observer
class Logo extends Component {
  render() {
    const homeLink = `${__HOST}`;
    return (
      <Containter slot="logo">
        <a className="link" href={homeLink}>
          <img height="32px" src={require('@/assets/images/logo@2x.png')} alt={''} />
        </a>
      </Containter>
    );
  }
}

export default Logo;
