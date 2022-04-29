<template>
  <div>
    <dashboardHeader />
    <div class="h-screen w-screen flex flex-col justify-center items-center ">
      <div>
        <h1 v-if="error.statusCode === 404" class="title text-4xl text-white">
          Page non trouvée
        </h1>
        <h1 v-else>
          An error occurred
        </h1>
      </div>
      <NuxtLink to="/" class="btn-no-float my-4">
        Revenir à l'accueil
      </NuxtLink>
    </div>
    <dashboardSidebar />
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'] // you can set a custom layout for the error page
}
</script>
