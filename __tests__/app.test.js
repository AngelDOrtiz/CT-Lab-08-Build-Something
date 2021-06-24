import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Horoscope from '../lib/models/Horoscope.js';

describe('horoscope routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.only('creates a horoscope via POST', async () => {
    const res = await request(app)
      .post('/api/v1/horoscopes')
      .send({ sign: 'aquarius' });
    
    expect(res.body).toEqual({
      'currentDate': expect.any(String),
      'horoscope':expect.any(String),
      'compatibility': expect.any(String),
      'mood': expect.any(String),
      'color': expect.any(String),
      'luckyNumber': expect.any(String),
      'luckyTime': expect.any(String)
    });
  });

  it('finds all horoscopes via GET', async () => {
    const aquarius = await Horoscope.insert({
      'currentDate': 'June 22, 2021',
      'horoscope': 'It\'s a good day to do nothing -- you\'re waiting for a new burst of inspiration, and it\'s coming tomorrow or thereabouts. If you can blow off your appointments, that would be perfect.',
      'compatibility': 'Gemini',
      'mood': 'Cool',
      'color': 'Spring Green',
      'luckyNumber': '13',
      'luckyTime': '10am'
    });

    const sagittarius = await Horoscope.insert({
      'currentDate': 'June 22, 2021',
      'horoscope': 'Your closest connections are more important than ever today, so make sure that you\'re in touch with your partners -- business, romantic and other. It\'s a good time to clear the ground between you.',
      'compatibility': 'Aries',
      'mood': 'Social',
      'color': 'Orchid',
      'luckyNumber': '34',
      'luckyTime': '3pm'
    });

    const aries = await Horoscope.insert({
      'currentDate': 'June 22, 2021',
      'horoscope': 'Risks are rewarded today -- though not all of them pay off in the way you might expect them to! Go ahead and make a few plays that feel close to the edge and see how far you can take it.',
      'compatibility': 'Cancer',
      'mood': 'Productive',
      'color': 'Blue',
      'luckyNumber': '56',
      'luckyTime': '4pm'
    });

    const res = await request(app).get('/api/v1/horoscopes');
    expect(res.body).toEqual({ aquarius, sagittarius, aries });
  });
});
