// Named exports
export const apiKey = 'abc123';

export const url = 'http://belova.biz';

export function sayHi(name) {
    console.log(`Hello there ${name}`);
    
}

const age = 100;
const dog = 'White';

export {age as old, dog}

// export default apiKey;