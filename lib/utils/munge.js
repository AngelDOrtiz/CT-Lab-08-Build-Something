export function formatHoroscopes(data) {
  return{
    currentDate: data.date_range,
    horoscope: data.description,
    compatibility: data.compatibility,
    mood: data.mood,
    color: data.color,
    luckyNumber: data.lucky_number,
    luckyTime: data.lucky_time
  };
}
