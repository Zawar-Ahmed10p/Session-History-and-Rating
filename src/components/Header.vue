<template>
<header>
	<div class="overlay">
<h1>Session History</h1>
<!-- <h3>Reasons for Choosing US</h3> -->
<!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p> -->
	<br>
	<!-- <button type="button" v-on:click="logout()">Logout</button> -->
	<!-- <nav >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
		</div>
</header>

</template>
<script>
 export default {
	methods: {
		logout() {
			localStorage.removeItem('user-token');
			this.$router.replace({ name: "login" });

			}
		}
 }
</script>
<style>
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 50px;}
header {
	/* background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg'); */
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
}
header .overlay{
	width: 100%;
	height: 10%;
	/* padding: 50px; */
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%);
	
}

h1 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3, p {
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 30px;
}

.header .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* .history-form .action button {
	border: none;
	outline: none;
	padding: 10px 20px;
	border-radius: 50px;
	color: #333;
	background: #fff;
	margin-bottom: 50px;
	box-shadow: 0 3px 20px 0 #0000003b;
} */
button:hover{
	cursor: pointer;
}
</style>