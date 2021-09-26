import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Button, Table, Row, Col, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { configure } from 'mobx';
configure({ isolateGlobalState: true });
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores';

export interface Page1Props {
  height?: number | string;
}

const Container = styled.div`
  padding: 20px;
  min-height: 100%;
`;

const Page1 = observer<Page1Props>(props => {
  const { common } = useStore();

  return <Container>Page 1</Container>;
});

export default Page1;
