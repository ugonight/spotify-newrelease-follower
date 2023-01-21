<script>
	import '../app.scss';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import Spotify_Logo from '$lib/images/Spotify_Logo_RGB_Green.png';
</script>

<svelte:head>
	<title>Spotify New Release Follower</title>
	<meta name="description" content="Spotify新曲プレイリスト自動管理ツール" />
</svelte:head>

<!-- Navigation-->
<nav class="navbar navbar-light bg-light static-top">
	<div class="container justify-content-center justify-content-lg-between">
		<a class="navbar-brand" href="/">Spotify New Release Follower</a>
		<a class="btn btn-primary" href="#signup">Sign in with Spotify</a>
	</div>
</nav>

<slot />

<!-- Footer-->
<footer class="footer bg-light">
	<div class="container">
		<div class="row text-center">
			<div class="col-lg">
				<p class="text-muted mb-4 mb-lg-0">
					このWebサービスは <a
						href="https://www.spotify.com/jp/"
						target="_blank"
						rel="noopener noreferrer"><img src={Spotify_Logo} width="100" alt="Spotify" /></a
					> を利用しています。
				</p>
			</div>
			<div class="col-lg">
				<ul class="list-inline mb-2">
					<!-- <li class="list-inline-item"><a href="#!">About</a></li>
					<li class="list-inline-item">⋅</li> -->
					<li class="list-inline-item"><a href="/contact">お問い合わせ</a></li>
					<li class="list-inline-item">⋅</li>
					<li class="list-inline-item"><a href="#!">利用規約</a></li>
					<li class="list-inline-item">⋅</li>
					<li class="list-inline-item"><a href="#!">プライバシーポリシー</a></li>
				</ul>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<p class="text-muted small text-center mb-4 mb-lg-0">&copy; 2022 ugonight</p>
			</div>
		</div>
		<!-- <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
				<ul class="list-inline mb-0">
					<li class="list-inline-item me-4">
						<a href="https://twitter.com/ugonight_nanase"><i class="bi-twitter fs-3" /></a>
					</li>
				</ul>
			</div> -->
	</div>
</footer>

<style>
	footer.footer {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
</style>
