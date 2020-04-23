const fs = require('fs')

module.exports = function writefile(location,content) {
    fs.appendFile(location, content, err => {
        if (err) {
            console.error(err)
            return
          }
    })
}