export default class OptionPosition {
  db;
  constructor(db) {
    this.db = db;
  }

  create = async (data) => {
    try {
      await this.db.optionPosition.upsert({
        where: { tweet_id: data.tweet_id },
        update: { ...data },
        create: { ...data },
      });
    } catch (err) {
      console.log(err);
    }
  };
}
