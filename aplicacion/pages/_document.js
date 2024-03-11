import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossorigin="anonymous"
        />
        <link 
          href="css/globals_2.css" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <div className="container">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
