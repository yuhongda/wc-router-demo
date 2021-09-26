import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import bg from '../../assets/images/bg.png';

const Containter = styled.div`
  text-align: center;
  padding-left: 200px;
  img {
    margin: 100px auto;
  }
`;

@inject('store')
@observer
class Home extends Component {
  render() {
    return (
      <Containter>
        <img style={{ borderRadius: 4 }} src={bg} />
      </Containter>
    );
  }
}

export default Home;
