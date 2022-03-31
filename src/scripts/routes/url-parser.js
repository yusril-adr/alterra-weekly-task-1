const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.pathname.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.pathname.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      id: urlsSplits[0] || null,
      verb: urlsSplits[1] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.id ? '/:id' : '/')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;
