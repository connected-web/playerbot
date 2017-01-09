module.exports = function(api) {

  function handleError(e) {
    console.log('Playerbot Error', e);
    console.error(e.stack);
  }

  return handleError;
};
