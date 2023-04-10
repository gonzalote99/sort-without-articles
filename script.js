const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];


function strip(bandName) {
  return bandName.replace( /\w+\a/g, '').trim();
}

const sorteBands = bands.sort((a, b) => 
strip(a) > strip(b) ? 1 : strip(b) > strip(a) ? - 1 : 0
);

const bandUl = document.querySelector('#bands');


bandUl.innerHTML = sorteBands.map((band) => `<li>${band}</li>`).join('');