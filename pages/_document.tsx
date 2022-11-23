// ./pages/_document.js

import Document, { Head, Html, Main, NextScript } from 'next/document';
class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          className={`bg-white text-black dark:bg-gray-900 dark:text-white  `}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;

//import { Html, Head, Main, NextScript } from 'next/document'
/* 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} */
