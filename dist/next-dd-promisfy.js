/*!
 * name: @feizheng/next-dd-promisfy
 * description: Promisfy for dingtalk.
 * homepage: https://github.com/afeiship/next-dd-promisfy
 * version: 1.0.4
 * date: 2020-06-14T07:58:16.994Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { context: null };

  nx.ddPromisfy = function (inFn, inOptions) {
    if (typeof inFn !== 'function') return inFn;
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    return function (opts) {
      return new Promise(function (resolve, reject) {
        var args = nx.mix({
          onSuccess: function (res) { resolve(res); },
          onFail: function (err) { reject(err); }
        }, opts);
        return inFn.call(options.context, args);
      })
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ddPromisfy;
  }
})();

//# sourceMappingURL=next-dd-promisfy.js.map
