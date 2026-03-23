const reportWebVitals = (callback) => {
  if (callback && typeof callback === 'function') {
    import('web-vitals').then((mesures) => {
      mesures.getCLS(callback);
      mesures.getFID(callback);
      mesures.getFCP(callback);
      mesures.getLCP(callback);
      mesures.getTTFB(callback);
    });
  }
};

export default reportWebVitals;