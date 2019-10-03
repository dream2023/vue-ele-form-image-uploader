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
  // 对所有具有上传属性的组件适用
  upload: {
    fileSize: 10
  },
  // 可以在这里设置全局的 image-uploader 属性
  // 属性参考下面的 #attrs
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
    // 只需要在这里指定为 image-uploader 即可
    type: 'image-uploader',
    // 属性参考下面的 #attrs
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

## 示例

```html
<template>
  <el-card
    header="ele-form-image-uploader 演示"
    shadow="never"
    style="max-width: 1250px;margin: 20px auto;"
  >
    <ele-form
      :form-data="formData"
      :form-desc="formDesc"
      :request-fn="handleRequest"
      @request-success="handleSuccess"
    />
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {},
      formDesc: {
        avatar: {
          label: '头像',
          type: 'image-uploader',
          attrs: {
            fileSize: 3,
            action: 'https://jsonplaceholder.typicode.com/posts',
            responseFn (response, file) {
              return file.url
            }
          }
        },
        covers: {
          label: '封面',
          type: 'image-uploader',
          attrs: {
            drag: true, // 多张
            action: 'https://jsonplaceholder.typicode.com/posts',
            responseFn (response, file) {
              return file.url
            }
          }
        }
      }
    }
  },
  methods: {
    handleRequest (data) {
      console.log(data)
      return Promise.resolve()
    },
    handleSuccess () {
      this.$message.success('提交成功')
    }
  },
  mounted () {}
}
</script>

<style>
body {
  background-color: #f0f2f5;
}
</style>
```

## attrs

> 属性具体含义, 请参考: [vue-ele-upload-image](https://github.com/dream2023/vue-ele-upload-image)

```js
attrs: {
  // 响应处理函数
  responseFn: Function,
  // 是否剪裁
  crop: {
    type: Boolean,
    default: false
  },
  // 裁剪高度
  cropHeight: {
    type: Number
  },
  // 裁剪宽度
  cropWidth: {
    type: Number
  },
  // 图片显示大小
  size: {
    type: Number,
    default: 150
  },
  // 大小限制(MB)
  fileSize: {
    type: Number
  },
  // 是否显示提示
  isShowTip: {
    type: Boolean,
    default: true
  },
  // 弹窗标题
  title: String,
  // 图片懒加载
  lazy: {
    type: Boolean,
    default: false
  },
  // 文件类型, 例如['png', 'jpg', 'jpeg']
  fileType: {
    type: Array
  },
  // 缩略图后缀, 例如七牛云缩略图样式 (?imageView2/1/w/20/h/20)
  // 如果存在, 则列表显示是加缩略图后缀的, 弹窗不带缩略图后缀
  thumbSuffix: {
    type: String,
    default: ''
  },
  // 上传地址 (同官网)
  action: {
    type: String,
    required: true
  },
  // 设置上传的请求头部(同官网)
  headers: Object,
  // 文件个数显示(同官网)
  limit: Number,
  // 是否启用拖拽上传 (同官网)
  drag: {
    type: Boolean,
    default: false
  },
  // 支持发送 cookie 凭证信息 (同官网)
  withCredentials: {
    type: Boolean,
    default: false
  },
  // 是否支持多选文件 (同官网)
  multiple: {
    type: Boolean,
    default: false
  },
  // 上传时附带的额外参数(同官网)
  data: Object,
  // 上传的文件字段名 (同官网)
  name: {
    type: String,
    default: 'file'
  },
  // 覆盖默认的上传行为，可以自定义上传的实现 (同官网)
  httpRequest: Function,
  // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）(同官网)
  accept: String
}
```

## 相关链接

- [vue-ele-upload-image](https://github.com/dream2023/vue-ele-upload-image)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
