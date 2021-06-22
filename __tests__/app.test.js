import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Horoscope from '../lib/models/Horoscope.js';

describe('horoscope routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a horoscope via POST', async () => {
    const res = await request(app)
      .post('/api/v1/horoscopes')
      .send({ sign: 'aquarius' });
    
    expect(res.body).toEqual({
      'currentDate': 'June 22, 2021',
      'horoscope': 'It\'s a good day to do nothing -- you\'re waiting for a new burst of inspiration, and it\'s coming tomorrow or thereabouts. If you can blow off your appointments, that would be perfect.',
      'compatibility': 'Gemini',
      'mood': 'Cool',
      'color': 'Spring Green',
      'luckyNumber': '13',
      'luckyTime': '10am'
    });
  });
});
