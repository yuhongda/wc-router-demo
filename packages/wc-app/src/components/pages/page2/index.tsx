import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Button, Table, Row, Col, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { configure } from 'mobx';
configure({ isolateGlobalState: true });
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores';

export interface Page2Props {
  height?: number | string;
}

const Container = styled.div`
  padding: 20px;
  min-height: 100%;
`;

const Page2 = observer<Page2Props>(props => {
  const { common } = useStore();

  return <Container>Page 2</Container>;
});

export default Page2;
