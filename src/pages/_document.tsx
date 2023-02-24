import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <div id={'modal_mount_point'}></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
