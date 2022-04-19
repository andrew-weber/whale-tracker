import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from './header'

import { gql } from "@apollo/client";
import client from "../apollo-client";

type Position = {
  id: string,
  tweet_id: string,
  option_type: string,
  strike_price: string,
  ticker: string,
}

const Home: NextPage<{positions: Position[]}> = ({positions}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whale Watching</title>
        <Header />
      </Head>
      <main className={styles.main}>
        {JSON.stringify(positions)}
      </main>

      <footer></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getPositions {
          expiry
          id
          option_type
          strike_price
          ticker
          tweet_id
        }
      }
    `,
  });

  return {
    props: {
      positions: data.getPositions
    },
  };
}

export default Home;
