<template>
  <div class="hello">
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='device()'>设备信息</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='webveiw()'>活动页WebVeiw</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='payview()'>付款码</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='idCardScan()'>身份证扫描</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='bankCardScan()'>银行卡扫描</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='loaction()'>定位</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='contactsUI()'>联系人UI</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='contacts()'>联系人</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='imagePicker()'>相册</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='setting()'>设置</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='close()'>关闭</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {},

  methods: {
    device: function(params) {
      YHAuthorize.callHandler("Device_Environment", "", resp => {
        console.log(resp);
      });
    },

    // 身份证扫描
    idCardScan: function() {
      YHAuthorize.callHandler("OCR_IDCardScan", "", resp => {
        console.log(resp);
      });
    },

    // 银行卡扫描
    bankCardScan: function() {
      YHAuthorize.callHandler("OCR_BankCardScan", "", resp => {
        console.log(resp);
      });
    },

    // 活动页
    webveiw: function() {
      let date = {
        url: "https://www.jianshu.com/",
        title: "测试"
      };
      YHAuthorize.callHandler("Page_OpenWebView", date, resp => {
        console.log(resp);
      });
    },

    // pay
    payview: function() {
      let date = {
        instructions_url: "https://www.jianshu.com/" // 使用说明地址
      };
      YHAuthorize.callHandler("Page_OpenPayView", date, resp => {
        console.log(resp);
      });
    },

    loaction: function() {
      YHAuthorize.callHandler("Privacy_Loaction", {}, resp => {});
    },

    contactsUI: function() {
      YHAuthorize.callHandler("Privacy_ContactUI", {}, resp => {});
    },

    contacts: function() {
      YHAuthorize.callHandler("Privacy_Contacts", {}, resp => {});
    },

    imagePicker: function() {
      var imgPicker = {
        type: "2",
        imageName: "",
        imageSize: "102400", // 100kb,自定义
        thumbnailSize: "10240" // 10kb,自定义
      };
      YHAuthorize.callHandler("SDK_OpenAlbun", imgPicker, resp => {});
    },

    setting: function() {
      YHAuthorize.callHandler("Device_Setting", {}, resp => {});
    },
    
    close: function() {
      YHAuthorize.callHandler("SDK_ClosePage", {}, resp => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  padding: 10px;
}
</style>
