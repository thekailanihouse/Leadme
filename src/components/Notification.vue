<template>
  <div :class="'is-${type}'" class="notification">
      {{message}}
  </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        type:{
            type: String,
            default: "sukses",
            validator: (val) => ["danger", "success"].includes(val),
        },
        message:{
            type: String,
            default: ""
        }
    }
}
</script>

<style>

</style>