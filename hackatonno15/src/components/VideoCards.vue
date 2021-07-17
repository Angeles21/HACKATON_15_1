<template>
	<div class="row container" style="padding-top:2em">
		<div class="card item col-md-3 col-6" v-for="(video, index) in videos" :key="index">
			<div class="top-card"></div>
			<div class="top-card2"></div>
			<div class="circle"></div>

			<img class="image-class" src="../assets/vid_8.png" />
			<div class="caption" style="padding:2.5em 1em">
				<h5>Title: {{ video.name }}</h5>
				<h6>Views: {{ video.view }}</h6>
				<div>{{ video.about }}</div>
				<div class="col" style="text-align: center">
					<router-link :to="`/singers/${video}`" class="btn btn-detail">
						DETAILS
					</router-link>
				</div>
			</div>
			<div class="bottom-card">
				<div data-toggle="modal" data-target="#modalEdit">
					<i class="bi bi-pencil-square"></i><br />
				</div>
				<div data-toggle="modal" data-target="#modalDelete">
					<i class="bi bi-x-circle" @click="deleteVid(index)"></i><br />
				</div>
			</div>
			<div class="vertical-line"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "VideoCards",
	data() {
		return {
			message: "Videos",
			videos: [],
		};
	},
	methods: {
		async getVideos() {
			const data = await fetch("http://localhost:3000/videos");
			const info = await data.json();
			this.videos = info;
			console.log(info);
		},
	},
	created() {
		console.log("metodo Created");
		this.getVideos();
	},

	//DELETE
	deleteItem(index) {
		this.items.splice(index, 1);
	},
	//RELOAD
	props: {
		proptest: {},
	},
	watch: {
		proptest() {
			this.videos = [...this.videos, this.proptest];
		},
	},
};
</script>

<style>
.card {
	max-width: 300px;
	min-height: 580px;
	background-color: #eceff1;
	position: relative;
	z-index: -2;
	border-radius: 10px;
	overflow: hidden;
	text-align: center;
	padding: 0%;
	margin: 0.2em;
}

.top-card {
	background: rgb(255, 199, 59);
	height: 100px;
	position: relative;
	z-index: -3;
	overflow: none;
}

.top-card2 {
	background-color: rgb(255, 255, 255);
	height: 40px;
	width: 100%;

	z-index: -3;
}

.circle {
	width: 120px;
	height: 120px;
	background: rgb(255, 255, 255);
	position: absolute;
	border-radius: 50%;
	top: 105px;
	left: 50%;
	transform: translate(-50%, -50.8%);
	z-index: -1;
}

.bottom-card {
	height: 60px;
	width: 100%;
	position: absolute;
	background: rgb(255, 199, 59);
	bottom: 0;
	display: grid;
	padding-top: 1em;
	grid-template-columns: 1fr 1fr;
	color: #eceff1;
}

.vertical-line {
	width: 1px;
	height: 60px;
	bottom: 0;
	left: 50%;
	margin-top: -15px;
	background-color: #eceff1;
	position: absolute;
}

.image-class {
	border-radius: 50%;
	z-index: 3;
	width: 110px;
	height: 110px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 45%);
	object-fit: cover;
}
</style>
