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
