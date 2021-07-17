<template>
	<!-- NAVEGATION BAR -->
	<nav class="navbar navbar-expand-lg navbar">
		<div class="container-fluid">
			<!-- THIS IS THE LOGO -->
			<a class="navbar-brand" href="#" style="color: white"> Nico Nico Douga</a>
			<!-- THIS IS THE RESPONSIVE MENU -->
			<div class="d-flex">
				<!-- THIS THE BUTTON TO ADD -->
				<button
					class="btn-add"
					@click="create"
					data-bs-toggle="modal"
					data-bs-target="#modalAdd"
				>
					UPLOAD
				</button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style></style>
