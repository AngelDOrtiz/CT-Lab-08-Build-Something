import { Router } from 'express';
import Horoscope from '../models/Horoscope';
import HoroscopeService from '../service/horoscopeService';

export default Router()
  .post('/api/v1/horoscopes', async (req, res) => {
    try {
      const horoscope = await HoroscopeService.getHoroscopeBySign(req.body);
      res.send(horoscope);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/horoscopes', async (req, res) => {
    try{
      const horoscope = await Horoscope.findAll();
      res.send(horoscope);
      
    } catch (err) {
      res.send.status(500).send({ error: err.message });
    }
  });
