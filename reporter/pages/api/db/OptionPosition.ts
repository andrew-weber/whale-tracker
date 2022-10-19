export default class OptionPosition {
  db;
  constructor(db: any) {
    this.db = db;
  }

  find = async ({ 
    ticker, 
    page = 1, 
    pageSize = 20,
    afterExpiryDate,
    beforeExpiryDate
  }: { 
    ticker: string, 
    page?: number, 
    pageSize?: number,
    afterExpiryDate?: string,
    beforeExpiryDate?: string 
  }) => {
    return await this.db.optionPosition.findMany({
      where: {
        ticker: ticker ? {
          equals: `$${ticker}`
        } : undefined,
        expiry: afterExpiryDate || beforeExpiryDate ? {
          lte: beforeExpiryDate ? beforeExpiryDate : undefined,
          gte: afterExpiryDate ? afterExpiryDate : undefined
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