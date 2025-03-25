// Příjem divadla - spočítejte příjem divadla ze vstupného.
// document.body.innerHTML += 5 + 2;
/*
const prijem = 12 * 174 * 15;
document.body.innerHTML += 'Měsíční příjem divadla je ' + prijem + ' EUR.';
const student = 0.65 * 12 * 174 * 15;
const prijemStudent = student * 0.4 + prijem * 0.6;
document.body.innerHTML += '<p></p>';
document.body.innerHTML +=
  'Měsíční příjem se studenty je ' + prijemStudent + ' EUR.';
document.body.innerHTML += '<p></p>';

//Zaokrouhlete číslo na desetiny, setiny a celé stovky.
const x = 280.254485415;
document.body.innerHTML = Math.round(x * 10) / 10;
document.body.innerHTML += '<p></p>';
document.body.innerHTML = Math.round(x * 100) / 100;
document.body.innerHTML += '<p></p>';
document.body.innerHTML = Math.round(x / 100) * 100;


//Vymyslete funkci, která simuluje hod kostkou.
document.body.innerHTML += Math.floor(Math.random() * 6 + 1);


// Formátovač data - Vypište do stránky hezky zformátované datum.
const den = Number(prompt('Zadej den (číslo):'));
const mesic = Number(prompt('Zadej měsíc (číslo):'));
const rok = Number(prompt('Zadej rok (číslo):'));
document.body.innerHTML += den + '. ' + mesic + '. ' + rok;


// Fahrnheit vs. Celsius - Vytvořte převodník stupňů Fahrenheita na stupně Celsia.
const far = prompt('Zadejte stupně Fahrnheit!');
const cels = (5 * (far - 32)) / 9;
document.body.innerHTML += 'To se rovná ' + cels + ' stupňů Celsia.';


//Letenka- Vypište informace o letu.
const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};
document.body.innerHTML +=
  '<h1>' +
  'Startovní země: ' +
  flight.countryFrom.name +
  ', cílová země: ' +
  flight.cityTo +
  '</h1>';

const bag = {
  width: 20,
  height: 40,
  length: 55,
};
document.body.innerHTML +=
  '<h2>' +
  'Povolené rozměry příručního zavazadla: ' +
  bag.width +
  ' x ' +
  bag.length +
  ' x ' +
  bag.height +
  '</h2>';
document.body.innerHTML +=
  '<p>' +
  'Cestující zaplatí za druhé zavazadlo ' +
  Math.ceil(flight.bags_price[2] * 25) +
  ' CZK.' +
  '</p>';

  */
