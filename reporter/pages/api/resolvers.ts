import { OptionPositions } from './db'

const resolvers = {
  Query: {
    getPositions: async (_: any,  {ticker, page, pageSize, afterExpiryDate, beforeExpiryDate}: any) => {
      return await OptionPositions.find({
        ticker: ticker?.toUpperCase(), 
        page, 
        pageSize,
        afterExpiryDate, 
        beforeExpiryDate
      }) 
    }
  },
};

export default resolvers