<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <!--<button onclick="http">接口调用</button>-->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: function () {
      // this.myhttp()
      this.restDemo()
      this.exeSQL()
    },
    methods: {
      myhttp: function () {
        console.log('http')
        this.$http({
          url: 'http://result.eolinker.com/DeQfXCMe20abf31cfcc88344ad196f0b31e775e8d44ca09?uri=addCart',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          params: {}
        }).then((res) => {
          console.log('success:' + JSON.stringify(res))
        }, (res) => {
          console.log('error:' + JSON.stringify(res))
        })
      },
      _digit2: function (n) {
        if (n < 10) return '0' + n
        return String(n)
      },

      /*
      * 􏲊􏲰􏰶􏲱􏲀􏲲􏱧􏲳􏰠http://www.pc-home.vip/servlets/binserv/Rest 􏲷􏰑􏲊􏲰􏰶􏲱􏱂􏱫􏲸􏲹􏱣􏱂􏲺􏲻􏲼􏲽􏰵􏰶􏲍􏰸􏲎􏲾􏰣􏰃􏰄􏱜􏱝􏰍􏰎􏲑
      * http://www.pc-home.vip/html/nds/schema/resthome.jsp 􏲊􏱂􏱫􏲸􏲹􏱻􏱼􏰷􏰸􏱉􏱊􏲿􏳀􏲑
      * http://www.pc-home.vip/html/nds/schema/testrest.jsp
      * */
      restDemo: function () {
        var d = new Date()
        let sipAppKey = 'b2badmin'
        let sipAppSecret = 'df0b562ba7780f5c09c61ecc0c369e89'
        let sipTimestamp = d.getFullYear() + '-' + this._digit2(d.getMonth() + 1) + '-' + this._digit2(d.getDate()) + ' ' +
          this._digit2(d.getHours()) + ':' + this._digit2(d.getMinutes()) + ':' + this._digit2(d.getSeconds()) + '.111'
        let sipSign = this.$md5(sipAppKey + sipTimestamp + sipAppSecret)
        let _url = 'http://www.pc-home.vip:8888/servlets/binserv/Rest'
        let _transactions = [{
          id: 3,
          command: 'Query',
          params: {
            table: 'users',
            columns: ['NAME','TRUENAME', 'CREATIONDATE']
          }
        }]
        // aa
        let _data = {
          sip_appkey: sipAppKey,
          sip_timestamp: sipTimestamp,
          sip_sign: sipSign,
          transactions: JSON.stringify(_transactions)
        }
        let _config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          params: _data
        }
        console.log("===============");
        console.log(JSON.stringify(_config));
        this.$http.post(_url, {}, _config).then((res) => {
          console.log('success:' + JSON.stringify(res))
          console.log(res)
        }, (res) => {
          console.log('error:' + JSON.stringify(res))
        })
      },

      exeSQL: function () {
        var d = new Date()
        let sipAppKey = 'b2badmin'
        let sipAppSecret = 'df0b562ba7780f5c09c61ecc0c369e89'
        let sipTimestamp = d.getFullYear() + '-' + this._digit2(d.getMonth() + 1) + '-' + this._digit2(d.getDate()) + ' ' +
          this._digit2(d.getHours()) + ':' + this._digit2(d.getMinutes()) + ':' + this._digit2(d.getSeconds()) + '.111'
        let sipSign = this.$md5(sipAppKey + sipTimestamp + sipAppSecret)
        let _url = 'http://www.pc-home.vip:8888/servlets/binserv/Rest'
        let _transactions = [{
          id: 1,
          command: 'ExecuteSQL',
          params: {
            name: 'm_size',
            values: [],
            parsejson: 'N'
          }
        }]
        // aa
        let _data = {
          sip_appkey: sipAppKey,
          sip_timestamp: sipTimestamp,
          sip_sign: sipSign,
          transactions: JSON.stringify(_transactions)
        }
        let _config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          params: _data
        }
        console.log("===============");
        console.log(JSON.stringify(_config));
        this.$http.post(_url, {}, _config).then((res) => {
          console.log('success:' + JSON.stringify(res))
          console.log(res)
        }, (res) => {
          console.log('error:' + JSON.stringify(res))
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
