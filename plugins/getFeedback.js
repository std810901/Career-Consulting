const axios = require('axios')
const fs = require('fs-extra')
const unflatten = require('flat').unflatten
const path = require('path')

axios.get('https://sheet.talfin.in/?sheet_id=1miHNCIAEmjEdb2-M_i-rhErKIizo_I-aAleSqDOYFCg&sheet_name=feedback')
  .then(function (response) {
    if (response.data) {
      // console.log(response.data)

      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, "../locales", `feedback.json`)
        )
      );
      fs.writeJSONSync(
        path.resolve(__dirname, "../locales", `feedback.json`),
        unflatten(response.data, { object: true }),
        { spaces: 2 }
      );
    }
  })
  .catch(function (error) {
    console.log(error)
  })
