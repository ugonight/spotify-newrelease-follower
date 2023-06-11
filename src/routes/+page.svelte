<script>
	import { Container, Row, Col, Icon, Button } from 'sveltestrap';
</script>

<!-- Masthead-->
<header class="masthead">
	<Container class="position-relative">
		<Row class="justify-content-center">
			<Col>
				<div class="text-center text-white">
					<!-- Page heading-->
					<h1 class="mb-5">Spotify新曲プレイリスト<br class="d-sm-none" />自動管理ツール</h1>
					<Button color="success" size="lg" href="/login">
						Spotify でログインしてはじめる
					</Button>
					<p class="mt-3">
						<small>
							ログインすると<a href="/terms-of-use">利用規約</a>・<a href="/privacy-policy"
								>プライバシーポリシー</a
							>・<a href="/cookie-policy">Cookie ポリシー</a>に同意したものとみなされます。
						</small>
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</header>

<section class="features-icons bg-light text-center">
	<Container>
		<Row>
			<Col lg="4">
				<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<Icon
							as="i"
							name="journal-plus"
							class="bi m-auto text-primary"
							style="font-size: 4.5rem;"
						/>
					</div>
					<h3>新曲を自動追加！</h3>
					<p class="lead mb-0">
						アーティストのニューリリースを監視して、すばやくプレイリストに追加します。
					</p>
				</div>
			</Col>
			<Col lg="4">
				<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<Icon name="journal-minus" class="m-auto text-primary" style="font-size: 4.5rem;" />
					</div>
					<h3>古い曲を自動削除！</h3>
					<p class="lead mb-0">
						プレイリスト内でリリースから指定した期間が経過した曲を、自動で削除します。
					</p>
				</div>
			</Col>
			<div class="col-lg-4">
				<div class="features-icons-item mx-auto mb-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<Icon name="headphones" class="m-auto text-primary" style="font-size: 4.5rem;" />
					</div>
					<h3>Let's enjoy your music!</h3>
					<p class="lead mb-0">
						あなただけのオリジナルのプレイリストを作成して、音楽を楽しみましょう！
					</p>
				</div>
			</div>
		</Row>
	</Container>
</section>

<style>
	header.masthead {
		position: relative;
		background-color: #343a40;
		background-size: cover;
		padding-top: 8rem;
		padding-bottom: 8rem;
	}
	header.masthead:before {
		content: '';
		position: absolute;
		background-color: #1c375e;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		opacity: 0.5;
	}
	header.masthead h1,
	header.masthead .h1 {
		font-size: 2rem;
	}
	@media (min-width: 768px) {
		header.masthead {
			padding-top: 12rem;
			padding-bottom: 12rem;
		}
		header.masthead h1,
		header.masthead .h1 {
			font-size: 3rem;
		}
	}

	.features-icons {
		padding-top: 7rem;
		padding-bottom: 7rem;
	}
	.features-icons .features-icons-item {
		max-width: 20rem;
	}
	.features-icons .features-icons-item .features-icons-icon {
		height: 7rem;
	}
	.features-icons .features-icons-item .features-icons-icon i {
		font-size: 4.5rem;
	}
</style>
