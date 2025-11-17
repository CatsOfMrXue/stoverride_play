// hello-world-debug.js
// 只打印 Hello World，用于调试脚本是否触发

;(function () {
  try {
    console.log('====== [Stash Script Debug] ======')
    console.log('Hello World from Stash script')
  } catch (e) {
    console.log('[hello-world-debug] error: ' + String(e))
  } finally {
    // 不修改请求/响应，只是放行
    $done({})
  }
})()
