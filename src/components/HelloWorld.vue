<template>
  <div class="hello">
    <button type="button" class="btn btn-primary btn-lg btn-block" @click='device()'>设备信息</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
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
