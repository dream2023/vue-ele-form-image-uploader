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
  name: 'App',
  data () {
    return {
      formData: {},
      formDesc: {
        avatar: {
          label: '头像',
          type: 'image-uploader',
          attrs: {
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
