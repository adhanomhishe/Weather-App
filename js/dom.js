import helpers from './helpers';

const dom = function dom() {
  function show(value) {
    switch (true) {
      case value === 'search':
        document.getElementById('main').style.display = 'none';
        document.getElementById('section').style.display = 'block';
        document.getElementById('section2').style.display = 'none';
        break;
      case value === 'forecast':
        document.getElementById('main').style.display = 'none';
        document.getElementById('section').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        break;
      default:
        document.getElementById('main').style.display = 'block';
        document.getElementById('section').style.display = 'none';
        document.getElementById('section2').style.display = 'none';
        break;
    }
  }