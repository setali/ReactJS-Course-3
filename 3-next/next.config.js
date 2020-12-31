const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER} = require('next/constants')


module.exports = (phase, { defaultConfig }) => {
  // console.log(phase)
  //
  // console.log(defaultConfig)
  if (phase === PHASE_PRODUCTION_SERVER) {
    return  {
      disDir: '.dev'
    }
  }
  if (phase === PHASE_PRODUCTION_SERVER) {
    return  {
      disDir: '.prod'
    }
  }

  return {
    /* config options here */
  }
}