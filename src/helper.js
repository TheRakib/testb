function rovrsprak(input) {
  const consonent = /[bcdfghjklmnpqrstvwxyz]/gi;
  let result = input
    .toString()
    .replace(consonent, (char) => `${char}o${char.toLowerCase()}`);
  return result;
}

function decode(input) {
  const consonentOconsonent = /([bcdfghjklmnpqrstvwxyz])o\1/gi;
  let result = input
    .toString()
    .replace(consonentOconsonent, (char) => char.substr(0, 1));
  return result;
}

module.exports = { rovrsprak, decode };
