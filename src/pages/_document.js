import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <title>Image WaterFall</title>
          {/*<link rel="icon" href="/favicon.ico" />*/}
          <meta name="description" content="Photo Gallery" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
