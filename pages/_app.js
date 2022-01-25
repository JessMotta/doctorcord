function GlobalStyle() {
  return (
    <style global jsx>
      {`
        @font-face {
          font-family: "DoctorWho";
          src: url("/static/font/Doctor-Who.ttf") format("ttf");
          font-weight: 400;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }

        body {
          font-family: "DoctorWho";
        }
        /* App fit Height */
        html,
        body,
        #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
      `}
    </style>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}
