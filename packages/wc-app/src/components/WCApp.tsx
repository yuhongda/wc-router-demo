import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import styled from '@emotion/styled';
import { configure } from 'mobx';
configure({ isolateGlobalState: true });
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../router';
import Nav from './Nav';

export interface WCAppProps {
  baseURL?: string;
}

const Container = styled.div`
  padding: 20px;
  min-height: 100%;
`;

const WCApp = observer<WCAppProps>(props => {
  const { common, router } = useStore();
  const { baseURL } = props;

  return (
    <Container>
      <Router basename={baseURL || '/'}>
        <Nav />
        <Routes />
      </Router>
    </Container>
  );
});

WCApp.defaultProps = {
  baseURL: '/'
};

export default WCApp;
