import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { gql } from "@apollo/client";

import client from "../apollo-client";
import styles from "../styles/Home.module.css";
import Header from './header'
import PositionTable from './PositionTable'

const getPositions = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        getPositions {
          expiry
          id
          option_type
          strike_price
          underlying
          bid
          ask
          ticker
          tweet_id
          tweeted_at
        }
      }
    `,
  });
  return data.getPositions
}

export type Position = {
  id: string,
  tweet_id: string,
  option_type: string,
  strike_price: string,
  underlying: string,
  bid: string,
  ask: string,
  ticker: string,
  tweeted_at: Date,
}

const Home: NextPage = () => {
  const { data: positions } = useQuery<Position[]>('positions', getPositions)

  return (
    <div className={styles.container}>
      <Head>
        <title>Whale Watching</title>
        <Header />
      </Head>
      <main className={styles.main}>
        <PositionTable positions={positions || []} />
      </main>

      <footer></footer>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('positions', getPositions)
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }

}

export default Home;
