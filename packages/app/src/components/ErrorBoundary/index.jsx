import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { notification, Button } from 'antd';
import { isDev } from '@/utils';

@inject('store')
@observer
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (isDev) {
      console.log(error, errorInfo);
      return;
    }
    const {
      store: { router },
    } = this.props;
    // router.push('/ErrorPage?code=500');
    if (window.location.search.includes('403')) {
      console.log(error, errorInfo);
      return;
    }
    notification.error({
      message: (
        <div>
          出错啦。{error.message}
          <Button type="link" onClick={() => window.location.reload()}>
            刷新重试
          </Button>
        </div>
      ),
    });
    console.log(error, errorInfo);
    if (typeof Sentry != 'undefined') {
      Sentry.captureException(error);
    }
  }

  render() {
    if (isDev && this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
