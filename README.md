# next-dd-promisfy
> Promisfy for dingtalk.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dd-promisfy
```

## usage
```js
import '@jswork/next-dd-promisfy';

const getPhoneInfo = nx.ddPromisfy(dd.device.base.getPhoneInfo, { context: dd.device.base });

// call the promisfy function
getPhoneInfo()
  .then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  });
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-dd-promisfy/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dd-promisfy
[version-url]: https://npmjs.org/package/@jswork/next-dd-promisfy

[license-image]: https://img.shields.io/npm/l/@jswork/next-dd-promisfy
[license-url]: https://github.com/afeiship/next-dd-promisfy/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dd-promisfy
[size-url]: https://github.com/afeiship/next-dd-promisfy/blob/master/dist/next-dd-promisfy.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dd-promisfy
[download-url]: https://www.npmjs.com/package/@jswork/next-dd-promisfy
