// @flow
/* eslint-disable no-console */
// console.log('hello world');

// const color = require('color')

// const redHexa = color({ r: 255, g: 0, b: 0}).hex();

// console.log(redHexa)

// const str = 'ES6';
// console.log(`hello ${str}`);

// const Dog = require('./dog');
import Dog from './dog'

const toby = new Dog('toby')
console.log(toby.bark())
// console.log(navigator.serviceWorker)
