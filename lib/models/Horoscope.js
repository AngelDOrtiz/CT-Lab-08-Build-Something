import pool from '../utils/pool';

export default class Horoscope {
    id;
    currentDate;
    horoscope;
    compatibility;
    mood;
    color;
    luckyNumber;
    luckyTime;

    constructor(row) {
      this.currentDate = row.current_day,
      this.horoscope = row.description,
      this.compatibility = row.compatibility,
      this.mood = row.mood,
      this.color = row.color,
      this.luckyNumber = row.lucky_number,
      this.luckyTime = row.lucky_time;
    }

    static async insert({ currentDate, horoscope, compatibility, mood, color, luckyNumber, luckyTime }) {
      console.log(currentDate, horoscope, compatibility, mood, color, luckyNumber, luckyTime);
      const { rows } = await pool.query(
          
        'INSERT INTO horoscopes (current_day, description, compatibility, mood, color, lucky_number, lucky_time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [currentDate, horoscope, compatibility, mood, color, luckyNumber, luckyTime]
      );
      return new Horoscope(rows[0]);
    }

    static async findAll() {
      const { rows } = await pool.query('SELECT * FROM horoscopes');

      return rows.map(row => new Horoscope(row));
    }
}
