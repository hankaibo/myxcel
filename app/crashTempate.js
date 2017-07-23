const electron = require('electron')
const crashReporter = electron.crashReporter

exports.start = function () {
  crashReporter.start({
    productName: 'myxcel',
    companyName: 'jusfoun-fe',
    submitURL: 'http://localhost:4000/crash/',
    autoSubmit: true
  })
}
