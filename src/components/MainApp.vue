<template>
  <main class='app__content'>
    <Form />
  </main>
</template>

<script>
import Form from '@/components/Form/Form'
export default {
  name: 'MainApp',
  components: { Form }
}
</script>

<style lang="scss" scoped>
.app__content {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
