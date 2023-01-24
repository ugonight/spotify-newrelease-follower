<!-- Masthead-->
<header class="masthead">
	<div class="container position-relative">
		<div class="row justify-content-center">
			<div class="col">
				<div class="text-center text-white">
					<!-- Page heading-->
					<h1 class="mb-5">Spotify新曲プレイリスト<br class="d-sm-none" />自動管理ツール</h1>
					<button type="button" class="btn btn-success btn-lg"
						>Spotify でログインしてはじめる</button
					>
					<p class="mt-3">
						ログインすると<a href="/terms-of-use">利用規約</a>・<a href="/privacy-policy"
							>プライバシーポリシー</a
						>・<a href="/cookie-policy">Cookie ポリシー</a>に同意したものとみなされます。
					</p>
				</div>
			</div>
		</div>
	</div>
</header>

<section class="features-icons bg-light text-center">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<i class="bi bi-journal-plus m-auto text-primary" />
					</div>
					<h3>新曲を自動追加！</h3>
					<p class="lead mb-0">
						アーティストのニューリリースを監視して、すばやくプレイリストに追加します。
					</p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<i class="bi bi-journal-minus m-auto text-primary" />
					</div>
					<h3>古い曲を自動削除！</h3>
					<p class="lead mb-0">
						プレイリスト内でリリースから指定した期間が経過した曲を、自動で削除します。
					</p>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="features-icons-item mx-auto mb-0 mb-lg-3">
					<div class="features-icons-icon d-flex">
						<i class="bi bi-headphones m-auto text-primary" />
					</div>
					<h3>Let's enjoy music!</h3>
					<p class="lead mb-0">
						あなただけのオリジナルのプレイリストを作成して、音楽を楽しみましょう！
					</p>
				</div>
			</div>
		</div>
	</div>
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
