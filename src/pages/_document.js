import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="zh">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="SlaShare - 官网"></meta>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
