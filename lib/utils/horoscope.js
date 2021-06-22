import superAgent from 'superagent';

export const getHoroscope = async (sign) => {
  const res = await superAgent.post(`https://aztro.sameerkumar.website?sign=${sign}&day=today`);
  return res.body;
};
