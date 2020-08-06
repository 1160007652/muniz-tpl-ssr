/**
 * @ Author: Muniz
 * @ Create Time: 1985-10-26 16:15:00
 * @ Modified by: Muniz
 * @ Modified time: 2020-06-20 18:28:09
 * @ Description: 首页
 */

import Head from "next/head";
import Banner from "_containers/Banner";
import React from "react";
import Header from "_containers/Header";
import Footer from "_containers/Footer";

import FunctionArea from "_containers/FunctionalArea";
import Introduction from "_containers/Introduction";

import "./index.less";

class HomePage extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className="page-home">
        <Head>
          <title>Findora 官网</title>
        </Head>
        <Header />
        <main>
          <Banner />
          <FunctionArea />
          <Introduction />
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
