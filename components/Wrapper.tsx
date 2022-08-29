import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

import { altTextProfilePicture, description, title } from "../data/site";
import Header from "./Header";

const Body = styled.div`
  overflow: hidden;
  margin: 1rem;
`;

export default function Wrapper({ children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Nico Hauser" />
        <meta
          name="keywords"
          content="web, development, developer, engineering, computer science, cyber security"
        />
        {/*<meta name="description" content="" />*/}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#fff" />

        <meta property="og:title" content={title} />
        <meta property="og:image" content="/images/me.jpg" />
        <meta property="og:image:alt" content={altTextProfilePicture} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tyratox" />
        <meta name="twitter:creator" content="@tyratox" />

        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#f5cd79"
        />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/images/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Body>
        <main>{children}</main>
      </Body>
    </div>
  );
}
