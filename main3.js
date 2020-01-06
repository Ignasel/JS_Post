let [vardas, pavarde, gatve] = ['Ignas', 'Ignauskas', 'kovos'];

gatve = 'partizanu';

console.log(`aš gyvenu: ${gatve} gatvėje ir mano vardas yra ${vardas}`);

const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);
