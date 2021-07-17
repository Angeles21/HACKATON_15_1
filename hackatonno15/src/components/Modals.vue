<template>
	<!-- MODAL FOR POP UPS-->
	<div
		class="modal fade"
		id="modalAdd"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Add Video</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true"></span>
					</button>
				</div>
				<div class="modal-body">
					<input
						class="form-control"
						type="text"
						id="idVid"
						placeholder="This is the ID"
						v-model="idVid"
						hidden
					/>
					<input
						class="form-control"
						type="text"
						id="nameVid"
						placeholder="Title of the Video"
						v-model="nameVid"
					/>
					<input
						class="form-control"
						type="text"
						id="viewVid"
						placeholder="Number of Views"
						v-model="viewVid"
						hidden
					/>
					<input
						class="form-control"
						type="text"
						id="urlVid"
						placeholder="Add Url"
						v-model="urlVid"
					/>
					<textarea
						class="form-control"
						name=""
						id="aboutVid"
						placeholder="Description"
						v-model="aboutVid"
					></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
						Go Back
					</button>
					<button
						type="button"
						class="btn btn-red"
						@click="create()"
						data-bs-dismiss="modal"
					>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modals",
	data() {
		return {
			idVid: "",
			nameVid: "",
			viewVid: "",
			urlVid: "../assets/vid_8.png",
			aboutVid: "",
		};
	},

	methods: {
		//UPLOAD VIDEO
		create() {
			if (
				this.nameVid.trim() === "" ||
				this.urlVid.trim() === "" ||
				this.aboutVid.trim() === ""
			) {
			} else {
				const video = {
					name: this.nameVid,
					view: 0,
					url: this.urlVid,
					about: this.aboutVid,
				};
				this.uploadVideo(video);
			}
		},

		async uploadVideo(datos) {
			try {
				const url = "http://localhost:3000/videos";

				const params = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},

					body: JSON.stringify(datos),
				};

				const data = await fetch(url, params);
				const result = await data.json();
				console.log(result);

				this.$emit("reload", result);
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style></style>
