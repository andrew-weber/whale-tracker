import { OptionPositions } from './db'

const resolvers = {
  Query: {
    getPositions: async (_: any, {ticker, page, pageSize}: any) => {
      console.log(ticker)
      return await OptionPositions.find({ticker, page, pageSize}) 
    }
  },
};

export default resolvers