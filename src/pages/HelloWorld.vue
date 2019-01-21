<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        created () {
            this.$nextTick(() => {
                this.getPerformance()
            })
        },
        methods: {
            getPerformance () {
                let timing = window.performance.timing
                console.log(timing)
                let timingObj = {}

                timingObj['重定向时间'] = (timing.redirectEnd - timing.redirectStart) / 1000
                timingObj['DNS解析时间'] = (timing.domainLookupEnd - timing.domainLookupStart) / 1000
                timingObj['TCP完成握手时间'] = (timing.connectEnd - timing.connectStart) / 1000
                timingObj['HTTP请求响应完成时间'] = (timing.responseEnd - timing.requestStart) / 1000
                timingObj['DOM开始加载前所花费时间'] = (timing.responseEnd - timing.navigationStart) / 1000
                timingObj['DOM加载完成时间'] = (timing.domComplete - timing.domLoading) / 1000
                timingObj['DOM结构解析完成时间'] = (timing.domInteractive - timing.domLoading) / 1000
                timingObj['脚本加载时间'] = (timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart) / 1000
                timingObj['onload事件时间'] = (timing.loadEventEnd - timing.loadEventStart) / 1000
                timingObj['页面完全加载时间'] = (timingObj['重定向时间'] + timingObj['DNS解析时间'] + timingObj['TCP完成握手时间'] + timingObj['HTTP请求响应完成时间'] + timingObj['DOM结构解析完成时间'] + timingObj['DOM加载完成时间'])

                console.log(timingObj)
            }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
