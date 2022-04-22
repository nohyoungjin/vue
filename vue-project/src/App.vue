<template>
  <nav>
    <router-link to="/">Home</router-link> <span>|</span>
    <router-link to="/about">About</router-link> <span>|</span>
    <router-link to="/DataBinding">DataBinding</router-link> <span>|</span>
    <router-link to="/NestedComponent">NestedComponent</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  @import "@/assets/scss/commons.scss";
</style>