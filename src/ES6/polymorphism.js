// polymorphism = 多态

/*
 * 优化前 
 */
var googleMap = {
  show: function () {
    console.log('开始渲染谷歌地图')
  }
}

var baiduMap = {
  show: function () {
    console.log('开始渲染百度地图')
  }
}

var renderMap = function (type) {
  if (type === 'google') {
    googleMap.show()
  } else if (type === 'baidu') {
    baiduMap.show()
  }
}

renderMap('google') // 输出：开始渲染谷歌地图
renderMap('baidu') // 输出：开始渲染百度地图


/*
 * 优化后 
 * 对象的多态性提示我们：“做什么”和“怎么去做”是可以分开的
 */
var googleMap = {
  show: function () {
    console.log('开始渲染谷歌地图')
  }
}

var baiduMap = {
  show: function () {
    console.log('开始渲染百度地图')
  }
}

/*
 * 后续增加soso地图，renderMap 函数不需要做出任何改变
 */
var sosoMap = {
  show: function () {
    console.log('开始渲染soso地图')
  }
}

var renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show()
  }
}

renderMap(googleMap) // 输出：开始渲染谷歌地图
renderMap(baiduMap) // 输出：开始渲染百度地图