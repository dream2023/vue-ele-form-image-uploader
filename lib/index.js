import EleFormImageUploader from './EleFormImageUploader'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('image-uploader', EleFormImageUploader)
}

export default EleFormImageUploader
