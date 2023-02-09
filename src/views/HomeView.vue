<template>
	<div class="home">

		<Header/>

		<b-container class="mt-5">
			<b-row align-h="center">
				<b-col cols="auto">

					<b-button variant="info">qzd</b-button>

				</b-col>
			</b-row>
		</b-container>

	</div>
</template>

<script>
	import Header from '@/shared/ui/header'

	export default {
		name: 'HomeView',
		components: { Header }
	}
</script>
