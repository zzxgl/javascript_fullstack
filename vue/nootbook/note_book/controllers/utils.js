let getNowFormateDate = function () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDay()
  var strDate = date.getDate()
  if(month>=1 && month<=9){
    month = '0' + month
  }
  if(strDate>=0 && strDate<=9){
    strDate = '0' + strDate
  }
  var currentDate = year + '年' + month + '月' + strDate + '日'
  return currentDate
}
module.exports = {
  getNowFormateDate
}