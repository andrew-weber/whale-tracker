import type { NextPage } from "next";
import { useState, useEffect } from 'react';
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import { useDebouncedCallback } from 'use-debounce'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from "../styles/Home.module.css";
import Header from './header'
import PositionTable from './PositionTable'

const GET_POSITIONS = gql`
  query getPositions($ticker: String) {
    getPositions(ticker: $ticker) {
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
`;

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
  const [ticker, setTicker] = useState<String>()
  
  const { data, refetch } = useQuery(GET_POSITIONS, { variables: { ticker } })
  const positions: Position[] = data?.getPositions;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(e.target.value)
  }
  const debouncedHandleChange = useDebouncedCallback(handleChange, 300);

  useEffect(() => { refetch({ ticker }) }, [ticker, refetch])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Whale Watching</title>
        </Head>
        <main className={styles.main}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              id="standard-basic" 
              label="Ticker" 
              variant="standard"
              onChange={debouncedHandleChange} 
            />
          </Box>
          <PositionTable positions={positions || []} />
        </main>

        <footer></footer>
      </div>
    </>
  );
};

export default Home;
