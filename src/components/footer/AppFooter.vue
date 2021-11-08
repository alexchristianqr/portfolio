<template>
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        <span>&copy; Copyright </span>
        <span class="fw-bold">{{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped></style>
