const axios = require('axios')

const { API_TIMEOUT, URL_STATIC_COMBO_SECTIONS } = require('../configs/config')

module.exports = async function (req, res, next) {
  if (req.query.endpoint === 'sections') {
    try {
      const response = await axios({
        method: 'get',
        url: URL_STATIC_COMBO_SECTIONS,
        timeout: API_TIMEOUT,
      })

      res.send({ endpoints: { sections: response.data } })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        '[API](/combo?endpoint=sections) fetch data from static json fail: ',
        JSON.stringify(error)
      )
      next()
    }
  } else {
    next()
  }
}
