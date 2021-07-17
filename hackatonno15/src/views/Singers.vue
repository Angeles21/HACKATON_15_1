<template>
	<div>
		<Header />
		<Modals @reload="reload" />
		<VideoCards :proptest="valor" />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import VideoCards from "@/components/VideoCards.vue";
import Modals from "@/components/Modals.vue";

export default {
	name: "Singers",
	components: {
		Header,
		VideoCards,
		Modals,
	},
	data() {
		return {
			valor: {},
		};
	},
	methods: {
		reload(valor) {
			this.valor = valor;
		},
	},
};
</script>

<style></style>
