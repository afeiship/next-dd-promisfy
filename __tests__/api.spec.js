const nx = require('@feizheng/next-js-core2');
const dd = require('dingtalk-jsapi');
require('../src/next-dd-promisfy');

describe('api.basic test', () => {
  test('nx.ddPromisfy should return a function', function () {
    var getInfo = nx.ddPromisfy(dd.device.base.getPhoneInfo, { context: dd.device.base });
    expect(typeof getInfo).toBe('function');
  });
});
