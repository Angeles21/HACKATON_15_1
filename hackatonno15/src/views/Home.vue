<template>
	<header class="w-100 position-relative vh-100 background">
		<!-- THE BG TEXT STARTS HERE -->
		<div class="container h-75 d-flex justify-content-left align-items-center main__text">
			<div class="d-flex flex-column align-items-left main__text__col">
				<h1 class="txt-main">
					WELCOME, <br />
					TO THE <br />
					DIVA PROJECT
				</h1>
				<br />
				<button type="button" class="btn second">START HERE</button>
			</div>
		</div>
	</header>
</template>

<script></script>

<style>
/** BACKGROUND **/
.background {
	position: absolute;
	background: url("../assets/wallpaper_1.png");
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: top;
	background-size: cover;
	z-index: 0;
}
/** HEADER & NAVIGATION **/
.menu {
	padding-top: 3vh;
}

.nav-link {
	font-size: 0.5em;
}

.underside {
	border: 1px solid rgb(18, 238, 212);
	margin: 0, auto;
}
.btn {
	text-transform: uppercase;
	font-size: 12px;
	padding: 4px 35px;
	border-radius: 20px;
	border: 4px solid white;
	background-color: Transparent;
	color: white;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
}
.btn:hover {
	color: white;
	background-color: rgb(18, 238, 212);
	border-color: rgb(18, 238, 212);
}

.primary:hover {
	background-color: rgb(242, 45, 140);
	border-color: rgb(242, 45, 140);
}
/** TEXT INDEX **/
.txt-main {
	margin-left: 1em;
	font-size: 6rem;
	color: white;
}
</style>
