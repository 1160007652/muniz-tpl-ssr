/**
 * @ Author: Muniz
 * @ Create Time: 2020-06-19 14:14:42
 * @ Modified by: Muniz
 * @ Modified time: 2020-06-20 23:56:57
 * @ Description: Next.js 覆写 _app.js  入口方法, 用于设置全局 多语言、 引入全局的样式
 */

import App, { Container } from 'next/app';
import intl from 'react-intl-universal';
import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';
import { Provider } from 'mobx-react';

import { initializeStore, rootStore } from '_src/stores';

import 'antd/dist/antd.css';
import '_src/assets/less/styles.css';

import zh from '_src/assets/locales/zh';
import en from '_src/assets/locales/en';

class CustomApp extends App {
  static getInitialProps = async (appContext) => {
    const { Component, ctx } = appContext;

    ctx.mobxStore = initializeStore();

    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      language: nextCookies(ctx).language,
      initialMobxState: ctx.mobxStore,
    };
  };

  constructor(props) {
    super(props);
    this.setLocales(props.language);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  setLocales = (language) => {
    intl.init({
      currentLocale: language || Cookies.get('language') || 'zh',
      locales: {
        zh,
        en,
      },
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}

export default CustomApp;
