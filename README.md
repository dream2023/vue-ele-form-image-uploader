# vue-ele-form-image-uploader | vue-ele-form 的图片上传扩展组件

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-form-image-uploader.svg)](https://www.npmjs.com/package/vue-ele-form-image-uploader)
[![download](https://img.shields.io/npm/dw/vue-ele-form-image-uploader.svg)](https://npmcharts.com/compare/vue-ele-form-image-uploader?minimal=true)

## 介绍

vue-ele-form-image-uploader 做为 vue-ele-form 的第三方扩展, 通过对 [vue-ele-upload-image](https://github.com/dream2023/vue-ele-upload-image) 的封装, 大大增强的上传图片的功能, 包括 `单张图片模式`/`多张图片模式`/`拖拽上传`/`裁剪上传` 的特性

![image](https://raw.githubusercontent.com/dream2023/images/master/vue-ele-form-image-uploader.6clreq9us6l.gif)

## 安装

```bash
npm install vue-ele-form-image-uploader --save
```

## 使用

```js
import EleForm from 'vue-ele-form'
import EleFormImageUploader from 'vue-ele-form-image-uploader'
// 注册 ele-form
Vue.use(EleForm, {
  // 可以在这里设置全局的 image-uploader 属性
  'image-uploader': {
    action: 'https://jsonplaceholder.typicode.com/posts' // 上传地址
  }
})

// 注册 image-uploader 组件
Vue.component('image-uploader', EleFormImageUploader)
```

```js
formDesc: {
  xxx: {
    label: 'xxx',
    type: 'image-uploader', // 只需要在这里指定为 image-uploader 即可
    // 属性参考: https://github.com/dream2023/vue-ele-upload-image
    attrs: {
      action: 'https://jsonplaceholder.typicode.com/posts', // 上传地址
      data: {token: 'xxx'}, // 附带数据
      // 上传后对响应处理, 拼接为一个图片的地址
      handleResponse(response, file, fileList) {
        // 根据响应结果, 设置 URL
        return 'https://xxx.xxx.com/image/' + response.id
      }
    }
  }
}
```

## 相关链接

- [vue-ele-upload-image](https://github.com/dream2023/vue-ele-upload-image)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
