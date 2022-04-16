export default class OptionPosition {
  db;
  constructor(db) {
    this.db = db;
  }

  create = async (data) => {
    try {
      await this.db.optionPosition.create({ data });
    } catch (err) {
      console.log(err);
    }
  };
}
