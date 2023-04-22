<script>
	import { Styles, Navbar, NavbarBrand, Container, Row, Col, Alert, Icon } from 'sveltestrap';
	import Spotify_Logo from '$lib/images/Spotify_Logo_RGB_Green.png';
</script>

<svelte:head>
	<title>Spotify New Release Follower</title>
	<meta name="description" content="Spotify新曲プレイリスト自動管理ツール" />
</svelte:head>

<Styles />

<!-- Navigation-->
<Navbar color="light" light class="bg-light static-top">
	<Container class="justify-content-center justify-content-lg-between">
		<NavbarBrand href="/">Spotify New Release Follower</NavbarBrand>
		<!-- <a class="btn btn-primary" href="#signup">Sign in with Spotify</a> -->
	</Container>
</Navbar>

<slot />

<!-- Footer-->
<footer class="footer bg-light">
	<Container class="container">
		<Row class="text-center">
			<Col lg>
				<p class="text-muted mb-4 mb-lg-0">
					このWebサービスは <a
						href="https://www.spotify.com/jp/"
						target="_blank"
						rel="noopener noreferrer"><img src={Spotify_Logo} width="100" alt="Spotify" /></a
					> を利用しています。
				</p>
			</Col>
			<Col lg>
				<ul class="list-inline mb-2">
					<!-- <li class="list-inline-item"><a href="#!">About</a></li>
					<li class="list-inline-item">⋅</li> -->
					<li class="list-inline-item"><a href="/contact">お問い合わせ</a></li>
					<li class="list-inline-item">⋅</li>
					<li class="list-inline-item"><a href="/terms-of-use">利用規約</a></li>
					<li class="list-inline-item">⋅</li>
					<li class="list-inline-item"><a href="/privacy-policy">プライバシーポリシー</a></li>
					<li class="list-inline-item">⋅</li>
					<li class="list-inline-item"><a href="/cookie-policy">Cookie ポリシー</a></li>
				</ul>
			</Col>
		</Row>
		<Row>
			<Col lg="6">
				<p class="text-muted small text-center text-lg-start my-4 mb-4 mb-lg-0">
					&copy; 2022 ugonight
				</p>
			</Col>
			<Col lg="6" class="h-100 text-center text-lg-end my-auto">
				<ul class="list-inline mb-0">
					<li class="list-inline-item me-4">
						<a href="https://twitter.com/ugonight_nanase" target="_blank" rel="noopener noreferrer"
							><i class="bi-twitter fs-3" /></a
						>
					</li>
					<li class="list-inline-item me-4">
						<a
							href="https://github.com/ugonight/spotify-newrelease-follower"
							target="_blank"
							rel="noopener noreferrer"><i class="bi bi-github fs-3" /></a
						>
					</li>
				</ul>
			</Col>
		</Row>
	</Container>
	<Alert color="danger" class="d-flex align-items-center mt-3 mx-3" role="alert">
		<Icon name="exclamation-triangle" class="fs-2 mx-4" />
		<div>このWebサイトは現在開発中です！<br />This website is currently under development!</div>
	</Alert>
</footer>

<style>
	footer.footer {
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
</style>
