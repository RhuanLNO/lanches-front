<template>
  <v-footer class="footer" color="#212121">
    <div class="px-4 py-2 text-center w-100">
      <p>v1.1</p>
      <p>Dúvidas, reclamações ou sugestões? Contato via email: <a href="mailto:qualoroleapp@outlook.com">qualoroleapp@outlook.com</a></p>
      {{ new Date().getFullYear() }} — <strong>Desenvolvido por Rhuan Levy</strong>
    </div>
  </v-footer>
</template>

<style>
.footer {
  padding: 0 !important;
  flex: 0 !important;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}
</style>