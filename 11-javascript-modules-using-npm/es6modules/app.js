import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config.js';

import User, { createURL, gravatar } from './src/user';

const andy = new User('Andy Steps', 'ovrass@gmail.com', 'belova.biz');
const profile = createURL(andy.name);
const image = gravatar(andy.email);

console.log(andy);
console.log(profile);
console.log(image);




// const ages = [1,1,4,52,12,4];

// console.log(uniq(ages));