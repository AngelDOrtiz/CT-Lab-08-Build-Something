DROP TABLE IF EXISTS horoscopes;

CREATE TABLE horoscopes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    current_day TEXT NOT NULL,
    description TEXT NOT NULL,
    compatibility TEXT NOT NULL,
    mood TEXT NOT NULL,
    color TEXT NOT NULL,
    lucky_number TEXT NOT NULL,
    lucky_time TEXT NOT NULL
)