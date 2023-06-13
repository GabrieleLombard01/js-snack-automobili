//JS RESET
console.log('JS OK')

//ARRAY AUTOMOBILI:
const cars = [
    {
      marca: 'Alfa Romeo',
      modello: 'Giulietta',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Doblò',
      alimentazione: 'diesel',
    },
    {
      marca: 'FIAT',
      modello: 'Panda',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Fiorino',
      alimentazione: 'metano',
    },
    {
      marca: 'Ford',
      modello: 'Fiesta',
      alimentazione: 'diesel',
    },
    {
      marca: 'Ford',
      modello: 'Ka',
      alimentazione: 'gpl',
    },
    {
      marca: 'Smart',
      modello: 'Smart',
      alimentazione: 'elettrico',
    },
  ];

// Array dei veicoli a benzina
  const benzinaCars = cars.filter(car => car.alimentazione === 'benzina');
  console.log('Veicoli a benzina:', benzinaCars);

// Array dei veicoli a diesel
  const dieselCars = cars.filter(car => car.alimentazione === 'diesel');
  console.log('Veicoli a diesel:', dieselCars);

