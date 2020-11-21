/*!
 * name: @jswork/next-dd-promisfy
 * description: Promisfy for dingtalk.
 * homepage: https://github.com/afeiship/next-dd-promisfy
 * version: 1.0.0
 * date: 2020-11-21 09:35:20
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: null };

  nx.ddPromisfy = function (inFn, inOptions) {
    if (typeof inFn !== 'function') return inFn;
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    return function (opts) {
      return new Promise(function (resolve, reject) {
        var args = nx.mix({
          onSuccess:resolve,
          onFail: reject
        }, opts);
        return inFn.call(options.context, args);
      })
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ddPromisfy;
  }
})();
