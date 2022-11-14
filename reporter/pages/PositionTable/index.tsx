import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import moment from 'moment';
import type { Position } from '../index'

type TableParams = {
  positions: Position[]
}

const PositionTable = ({positions = []} : TableParams) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ticker</TableCell>
            <TableCell>Option</TableCell>
            <TableCell>Strike Price</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Bid/Ask</TableCell>
            <TableCell>Underlying</TableCell>
            <TableCell>Tweeted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((row: any) => (
            <TableRow key={row.tweet_id}>
              <TableCell>{row.ticker}</TableCell>
              <TableCell>{row.option_type === 'C' ? 'CALL' : row.option_type === 'P' ? 'PUT' : null }</TableCell>
              <TableCell>{row.strike_price}</TableCell>
              <TableCell>{row.expiry}</TableCell>
              <TableCell>{row.bid} / {row.ask}</TableCell>
              <TableCell>{row.underlying}</TableCell>
              <TableCell>
                {moment(row.tweeted_at).format('M/DD/YY hh:mm a') }
                <IconButton onClick={() => {window.open(`https://www.twitter.com/x/status/${row.tweet_id}`)}}>
                  <OpenInNewIcon sx={{fontSize: 12, paddingLeft: '2px'}}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PositionTable