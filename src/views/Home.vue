<template>
  <div>
    <Header />
    <div class="flex-container h-5">
      <div class="flex-left">
        <Sidebar />
      </div>
      <div class="flex-fill">
        <h1>STUFF</h1>
      </div>
      <div class="flex-right">
        <h1>More stuff</h1>
      </div>
    </div>
    <h1>HOME</h1>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/layout/Header";
import Footer from "./../components/layout/Footer";
import Sidebar from "./../components/layout/Sidebar";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Sidebar
  },
};
</script>

<style>
.h-5 {
  height: 500px;
}

.flex-left {
  width: 20%;
  min-width: 150px;
  margin-right: auto;
  justify-content: left;
}

.flex-right {
  width: 20%;
  min-width: 150px;
  margin-left: auto;
  justify-content: right;
}

.flex-fill {
  align-items: stretch;
}

.flex-container {
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  /* justify-content: first baseline; */
  /* align-items: flex-start; */
}
</style>
