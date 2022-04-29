<template>
  <div>
    <button class="bg-red-200 p-8" @click="toggle">
      test
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    toggle () {
      console.log("j'ai clické")
    }
  }
}
</script>
