<template>
	<div class="singer">
		<div>
			<h1>USUARIO: {{ $route.params.id }}</h1>
			<div class="container mt-5 d-flex justify-content-center">
				<div class=" mb-3 " style="width: 18rem;">
					<img src="{{singer.url}}" />
					<p>Artist: {{ singer.title }}</p>
					<p>Views: {{ singer.view }}</p>
					<p>About: {{ singer.about }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "hola",
			singer: {},
		};
	},

	methods: {
		async getSinger() {
			const data = await fetch(`http://localhost:3000/videos/${this.$route.params.id}`);
			const info = await data.json();
			this.singer = info;
		},
	},

	created() {
		this.getSinger();
	},
};
</script>
