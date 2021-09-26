import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import WCApp from '../../../../wc-app/package';
import { toJS } from 'mobx';

const Container = styled.div`
  background: #efefef;
  padding: 60px 20px 50px 220px;
  min-height: 100%;
`;

const Sales: React.FC<IProps & RouteComponentProps> = inject('store')(
  observer((props) => {
    const {
      store: { common, router },
    } = props;

    useEffect(() => {
      // if (!common.userInfo.authFunction.includes(NEW_PRODUCT_TRACKING) && !isDev) {
      //   router.history.replace('/ErrorPage?code=403');
      //   return;
      // }
      return () => {
        // newProductTracking.clearData();
      };
    }, []);
    console.log(toJS(router.location));
    return (
      <Container>
        <WCApp baseURL={'Sales'} />
      </Container>
    );
  })
);

export default Sales;
