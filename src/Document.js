// ./src/Document.js
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { AfterRoot, AfterData } from "@jaredpalmer/after";

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = await renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { assets, data, ...page, styleTags };
  }

  render() {
    const { helmet, assets, data, styleTags } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
          <title>BoilerPlate AfterJs, Styled-components and Heroku</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { margin: 0; }
          `
            }}
          />
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
