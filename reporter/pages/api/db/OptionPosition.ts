export default class OptionPosition {
  db;
  constructor(db: any) {
    this.db = db;
  }

  find = async ({ 
    ticker, 
    page = 1, 
    pageSize = 20 
  }: { 
    ticker: string, 
    page?: number, 
    pageSize?: number 
  }) => {
    return await this.db.optionPosition.findMany({
      where: {
        ticker: ticker ? {
          equals: `$${ticker}`
        } : undefined
      },
      orderBy: {
        tweeted_at: 'desc'
      },
      skip: pageSize * (page - 1),
      take: pageSize
    })
  }
}