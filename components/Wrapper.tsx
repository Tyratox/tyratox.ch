import Head from "next/head";
import Link from "next/link";
import React from "react";

import { myName, siteTitle } from "../data/site";
import { Color } from "../styles/colors";

export default function Wrapper({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <img
              src="https://picsum.photos/200/300"
              height={144}
              width={144}
              alt={myName}
            />
            <h1>{myName}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="https://picsum.photos/200/300"
                  height={108}
                  width={108}
                  alt={myName}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{myName}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <div>color: {Color.primary}</div>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
