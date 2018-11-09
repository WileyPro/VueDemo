<template>
  <div class="hello">

    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='initData()'>初始化</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='addEventListener()'>监听</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='removeEventListener()'>注销</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='registerEvent()'>触发</button>
    
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='device()'>设备信息</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='webveiw()'>活动页WebVeiw</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='webveiwModule()'>Module WebVeiw</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='payview()'>付款码</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='idCardScan()'>身份证扫描</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='bankCardScan()'>银行卡扫描</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='loaction()'>定位</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='contactsUI()'>联系人UI</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='contacts()'>联系人</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='imagePicker()'>相册</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='setting()'>设置</button>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='uploadImg()'>上传图片</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block" @click='close()'>关闭</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgpath: "imag",
      Wiley: {}
    };
  },
  created: function() {},

  methods: {
    initData: function() {
      let that = this;
      this.Wiley.Keyboard = document.createElement("BUTTON");
      this.Wiley.registerEvent = function(type, data) {
        let event = document.createEvent("Events");
        event.initEvent(type, false, false);
        if (data) {
          for (let i in data) {
            if (data.hasOwnProperty(i)) {
              event[i] = data[i];
            }
          }
        }
        that.Wiley.Keyboard.dispatchEvent(event);
      };
    },

    addEventListener: function() {
      this.Wiley.Keyboard.addEventListener("KeyboardEvent", () => {
        console.log("KeyboardEvent 收到事件");
      });
      this.Wiley.Keyboard.addEventListener("view", () => {
        console.log("view 收到事件");
      });
    },

    removeEventListener: function() {
      this.Wiley.Keyboard.removeEventListener('KeyboardEvent');
      this.Wiley.Keyboard.removeEventListener('view');
    },

    registerEvent: function() {
      this.Wiley.registerEvent("KeyboardEvent", {});
      this.Wiley.registerEvent("view", {});
    },

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
      YHAuthorize.callHandler("OCR_BankCardScan", "", resp => {});
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
    //
    webveiwModule: function() {
      let date = {
        url: "https://www.jianshu.com/",
        title: "测试"
      };
      YHAuthorize.callHandler("Page_OpenModuleWebView", date, resp => {
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
        type: "3",
        imageName: "",
        imageSize: "102400", // 100kb,自定义
        thumbnailSize: "10240" // 10kb,自定义
      };
      let that = this;
      YHAuthorize.callHandler("Privacy_ImagePicker", imgPicker, resp => {
        console.log(resp.data.path);
        that.imgpath = resp.data.path;
      });
    },

    setting: function() {
      YHAuthorize.callHandler("Device_Setting", {}, resp => {});
    },

    uploadImg: function() {
      var params = {
        url: "http://10.67.27.144:8080/LoanFrontService/file/saveTempPic",
        header: {
          "Auth-Header":
            "{'userToken': 'TOKEN_c0e328e74df04d02a15a23ed9679a209','onceToken': '','appVersion': '','plateform': ''}"
        },
        imageArray: [
          {
            name: "13388889999_0.png",
            path: this.imgpath,
            params: {
              fileType: "2"
            }
          },
          {
            name: "13388889999_1.png",
            path: this.imgpath,
            params: {
              fileType: "4"
            }
          }
        ]
      };
      YHAuthorize.callHandler("SDK_UpLoadImage", params, resp => {});
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
