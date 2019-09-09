<template>
  <div class="hello">
    
    <h3>页面</h3>
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
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
                // console.log(timing)

                let completeTime = timing.domComplete - timing.domLoading
                if (completeTime < 0) {
                    setTimeout(() => {
                        this.getPerformance()
                    }, 200)

                    return
                }

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
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  padding: 10px;
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
