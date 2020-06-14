# next-dd-promisfy
> Promisfy for dingtalk.

## installation
```bash
npm install -S @feizheng/next-dd-promisfy
```

## usage
```js
import '@feizheng/next-dd-promisfy';

const getPhoneInfo = nx.ddPromisfy(dd.device.base.getPhoneInfo, { context: dd.device.base });

// call the promisfy function
getPhoneInfo()
  .then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  });
```

## resources
- http://bluebirdjs.com/docs/api/promise.promisify.html
