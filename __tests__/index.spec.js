(function () {
  require('../src');

  const dd = require('dingtalk-jsapi');

  describe('api.basic test', () => {
    test('nx.ddPromisfy should return a function', function () {
      var getInfo = nx.ddPromisfy(dd.device.base.getPhoneInfo, { context: dd.device.base });
      expect(typeof getInfo).toBe('function');
    });
  });
})();
