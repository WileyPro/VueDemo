/*
 *
 */
import md5 from 'js-md5'

class server_data {

  _sip_app_key = 'b2badmin'
  _sip_app_secret = 'df0b562ba7780f5c09c61ecc0c369e89'

  constructor (props) {
    this.init()
  }

  init () {

  }

  set_header () {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  set_params () {
    let sip_timestamp = this.get_nowdate_str()
    return {
      sip_appkey: this._sip_app_key,
      sip_timestamp: sip_timestamp,
      sip_sign: md5(this._sip_app_key + sip_timestamp + this._sip_app_secret),
      transactions: JSON.stringify(this.set_transactions())
    }
  }

  set_transactions () {
    let _transactions = [{
      id: 3,
      command: 'Query',
      params: {
        table: 'users',
        columns: ['NAME', 'TRUENAME', 'CREATIONDATE']
      }
    }]
  }

  get_nowdate_str () {
    let date = new Date()
    let tempDate = date.getFullYear() + '-' + this.formateNum(date.getMonth() + 1) + '-' + this.formateNum(date.getDate()) + ' ' +
      this.formateNum(date.getHours()) + ':' + this.formateNum(date.getMinutes()) + ':' + this.formateNum(date.getSeconds()) + '.000'
    return tempDate
  }

  formateNum (n) {
    if (n < 10) return '0' + n
    return String(n)
  }
}

const obj = new server_data()
export { obj }
