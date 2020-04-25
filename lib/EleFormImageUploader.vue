<template>
  <ele-upload-image
    :class="desc.class"
    :style="desc.style"
    v-bind="attrs"
    v-model="newValue"
    v-on="onEvents"
  />
</template>

<script>
import EleUploadImage from 'vue-ele-upload-image'
import formMixin from 'vue-ele-form/lib/mixins/formMixin'
import uploadMixin from 'vue-ele-form/lib/mixins/uploadMixin'

export default {
  name: 'ele-form-image-uploader',
  mixins: [formMixin, uploadMixin],
  components: {
    EleUploadImage
  },
  data () {
    return {
      defaultAttrs: {
        size: 150
      }
    }
  }
}
</script>
