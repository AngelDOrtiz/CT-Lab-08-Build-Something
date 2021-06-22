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

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM horoscopes WHERE id = $1', [id]);

      if (!rows[0]) return null;

      return new Horoscope(rows[0]);
    }

    static async update(horoscope, id) {
      const { rows } = await pool.query(
        `UPDATE horoscopes
            SET current_day = $1
            description = $2
            compatibility = $3
            mood = $4
            color = $5
            lucky_number = $6
            lucky_time = $7
            RETURNING *`
          [horoscope.currentDate, horoscope.horoscope, horoscope.compatibility, horoscope.mood, horoscope.color, horoscope.luckyNumber, horoscope.luckyTime]
      );
      return new Horoscope(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        `DELETE FROM horoscopes
            WHERE id = $1
            RETURNING *`,
        [id]
      );
      return new Horoscope(rows[0]);
    }
}
