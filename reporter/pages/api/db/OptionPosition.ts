export default class OptionPosition {
  db;
  constructor(db: any) {
    this.db = db;
  }

  findMany = async () => {
    return await this.db.optionPosition.findMany({
      orderBy: {
        tweeted_at: 'desc'
      }
    })
  }
}