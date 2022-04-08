<template>
  <nav>
    <router-link to="/">Home</router-link> <span>|</span>
    <router-link to="/about">About</router-link> <span>|</span>
    <router-link to="/DataBinding">DataBinding</router-link> <span>|</span>
    <router-link to="/NestedComponent">NestedComponent</router-link>
  </nav>
  <router-view/>
</template>

<style>
nav {
  font-size: 24px;
  list-style: none;
}

nav span {
  display: inline-block;
  position: relative;
  top: -4px;
  padding: 0 20px 0 10px;
  font-size: 10px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
