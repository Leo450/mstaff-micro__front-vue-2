<template>
	<div class="home">

		<Header/>

		<b-container class="mt-5">
			<b-row align-h="center">
				<b-col cols="auto" class="text-center">

					<div id="cookie">
						{{ cookie || 'No cookie' }}
					</div>
					<b-button variant="success" @click="setCookie">
						Set Cookie
					</b-button>
					<b-button variant="success" class="ms-2" @click="unsetCookie">
						Unset Cookie
					</b-button>

				</b-col>
			</b-row>
		</b-container>

	</div>
</template>

<script>
	import Header from '@/shared/ui/header'

	export default {
		name: 'HomeView',
		components: { Header },
		methods: {
			getCookie()
			{
				return this.$cookies.get('token')
			},
			setCookie()
			{
				this.$cookies.set('token', 'abc123')
				this.updateCookie()
			},
			unsetCookie()
			{
				this.$cookies.remove('token')
				this.updateCookie()
			},
			updateCookie()
			{
				this.cookie = this.getCookie()
			}
		},
		data()
		{
			return {
				cookie: null
			}
		},
		beforeMount()
		{
			this.updateCookie()
		}
	}
</script>
