import Horoscope from '../models/Horoscope.js';
import { getHoroscope } from '../utils/horoscope.js';

export default class HoroscopeService {
  static async getHoroscopeBySign({ sign }) {
    const horoscopeRes = await getHoroscope(sign);
    const formattedHoroscope = new Horoscope({ ...horoscopeRes, current_day: horoscopeRes.current_date });
    const insertedHoroscope = Horoscope.insert(formattedHoroscope);
    return insertedHoroscope;
  }
}
