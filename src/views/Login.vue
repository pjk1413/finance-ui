<template>
    <div>
        <Header />
        <LoginBox />
        <Footer />
    </div>
</template>

<script>
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import LoginBox from './../components/LoginBox';

export default {
    name: 'Login',
    components: {
    Header, 
    Footer, 
    LoginBox
  }

}
</script>

<style>

</style>