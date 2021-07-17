<template>
	<div>
		<router-link to="/">Home</router-link>
		<router-link to="/singers">Singers</router-link>

		<router-view />
	</div>
</template>

<script>
export default {
	name: "App",
	components: {},
};
</script>

<style>
/* General */
body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
		Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

li {
	list-style: none;
}

/* Main */

.container {
	max-width: 1600px;
	margin: auto;
	overflow: hidden;
}

.navbar {
	background: rgb(255, 199, 59);
}

.navbar-brand {
	margin: 1em;
}

th {
	padding: 1em;
	color: rgb(255, 199, 59);
}

td {
	padding: 1em 0;
	font-size: 12px;
	border-bottom: 1px solid #e1e1e1;
}

/* General */

.btn-add {
	color: white;
	background: transparent;
	border: 1.5px solid white;
	padding: 10px 50px;
	border-radius: 5px;
	margin: 1em;
}
.btn-add:hover {
	background: rgb(68, 68, 68);
}
/* Cols */

h5 {
	font-size: 1em;
	font-weight: bold;
	color: rgb(255, 199, 59);
}
.btn-detail {
	text-align: center;
	color: white;
	background: rgb(255, 199, 59);
	border: none;
	padding: 10px 50px;
	border-radius: 5px;
	margin: 1em;
}
</style>
