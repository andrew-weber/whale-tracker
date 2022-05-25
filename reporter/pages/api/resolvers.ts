import { OptionPositions } from './db'

const resolvers = {
  Query: {
    getPositions: async (_: any,  {ticker, page, pageSize}: any) => {
      return await OptionPositions.find({
        ticker: ticker?.toUpperCase(), 
        page, 
        pageSize
      }) 
    }
  },
};

export default resolvers