import { Router } from 'express';
import HoroscopeService from '../service/horoscopeService';

export default Router()
  .post('/api/v1/horoscopes', async (req, res) => {
    try {
      const horoscope = await HoroscopeService.getHoroscopeBySign(req.body);
      res.send(horoscope);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
