import { OptionPositions } from './db'

const resolvers = {
  Query: {
    getPositions: async () => {
      return await OptionPositions.findMany()
      
    }
  },
};


export default resolvers