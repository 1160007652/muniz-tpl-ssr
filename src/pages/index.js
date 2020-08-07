/**
 * @ Author: Muniz
 * @ Create Time: 1985-10-26 16:15:00
 * @ Modified by: Muniz
 * @ Modified time: 2020-06-20 18:28:09
 * @ Description: 首页
 */

import Head from 'next/head';
import React from 'react';
import Banner from '_containers/Banner';

import './index.less';

class HomePage extends React.Component {
  static propTypes = {};
  static getInitialProps = async (appContext) => {
    const { mobxStore } = appContext;

    mobxStore.testStore.counterAmount(Number((Math.random() * 100).toFixed()));

    return {};
  };
  render() {
    return (
      <div className="page-home">
        <Head>
          <title>React Next.js 同构网站</title>
        </Head>
        <main>
          <Banner />
        </main>
      </div>
    );
  }
}

export default HomePage;
