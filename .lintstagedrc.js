module.exports = {
  '*/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'eslint'],
  '*/**/*.{json,css,md}': ['prettier --write'],
};
