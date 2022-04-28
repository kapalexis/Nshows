<template>
  <span class="bg-green-100 w-fit p-1 text-slate-800 text-xs rounded">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Non défini'
    },
    date: {
      type: String,
      default: 'Non définie'
    },
    time: {
      type: Number,
      default: null
    }
  }
}
</script>
