<script>
	import '../app.postcss';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	import { Navbar, NavBrand, Alert } from 'flowbite-svelte';
	import Spotify_Logo from '$lib/images/Spotify_Logo_RGB_Green.png';
</script>

<svelte:head>
	<title>Spotify New Release Follower</title>
	<meta name="description" content="Spotify新曲プレイリスト自動管理ツール" />
</svelte:head>

<!-- Navigation-->
<Navbar color="light" class="bg-light static top-0">
	<div class="justify-center lg:justify-between">
		<NavBrand href="/">Spotify New Release Follower</NavBrand>
		<!-- <a class="btn btn-primary" href="#signup">Sign in with Spotify</a> -->
	</div>
</Navbar>

<div class="flex min-h-screen flex-col">
	<main class="flex flex-grow flex-wrap">
		<slot />
	</main>

	<!-- Footer-->
	<footer class="py-12 bg-slate-100">
		<div class="flex flex-col">
			<div class="mb-6 grid grid-cols-none text-center lg:grid-cols-2">
				<div>
					<p class="mb-6 inline-flex text-sm text-gray-500 lg:mb-0">
						このWebサービスは <a
							href="https://www.spotify.com/jp/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Spotify_Logo} alt="Spotify" class="mx-2 w-20 items-center" />
						</a> を利用しています。
					</p>
				</div>
				<div>
					<ul class="mb-2 flex flex-wrap items-center justify-center">
						<li class="mx-1 list-item">
							<a href="/contact" class="text-gray-600 hover:underline">お問い合わせ</a>
						</li>
						<li class="mx-1 list-item">⋅</li>
						<li class="mx-1 list-item">
							<a href="/terms-of-use" class="text-gray-600 hover:underline">利用規約</a>
						</li>
						<li class="mx-1 list-item">⋅</li>
						<li class="mx-1 list-item">
							<a href="/privacy-policy" class="text-gray-600 hover:underline"
								>プライバシーポリシー</a
							>
						</li>
						<li class="mx-1 list-item">⋅</li>
						<li class="mx-1 list-item">
							<a href="/cookie-policy" class="text-gray-600 hover:underline">Cookie ポリシー</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="grid grid-cols-none lg:grid-cols-2">
				<div class="text-center lg:text-start">
					<small class="mx-2 my-4 mb-4 text-gray-400 lg:mb-0"> &copy; 2022 ugonight </small>
				</div>
				<div>
					<ul class="mb-0 flex flex-wrap justify-center lg:justify-end">
						<li class="me-4 list-item">
							<a
								href="https://twitter.com/ugonight_nanase"
								target="_blank"
								rel="noopener noreferrer"><i class="bi-twitter text-xl" /></a
							>
						</li>
						<li class="me-4 list-item">
							<a
								href="https://github.com/ugonight/spotify-newrelease-follower"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i class="bi-github text-xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Alert color="red" class="mx-3 mt-3 flex items-center" role="alert">
			<i class="bi-exclamation-triangle mx-4 text-3xl" />
			<div>このWebサイトは現在開発中です！<br />This website is currently under development!</div>
		</Alert>
	</footer>
</div>