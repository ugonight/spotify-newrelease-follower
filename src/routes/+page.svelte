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
						ログインすると<a href="#!">利用規約</a>と<a href="#!">プライバシーポリシー</a
						>に同意したものとみなされます。
					</p>
				</div>
			</div>
		</div>
	</div>
</header>

<section class="container showcase">
	<div class="row">
		<div
			class="col-lg-6 order-lg-2 text-white showcase-img"
			style="background-image: url('assets/img/bg-showcase-1.jpg')"
		/>
		<div class="col-lg-6 order-lg-1 my-auto showcase-text">
			<h2><i class="bi bi-journal-plus" /> 新曲を自動追加！</h2>
			<p class="lead mb-0">
				アーティストのニューリリースを監視して、すばやくプレイリストに追加します。
			</p>
		</div>
	</div>
	<div class="row">
		<div
			class="col-lg-6 order-lg-2 text-white showcase-img"
			style="background-image: url('assets/img/bg-showcase-1.jpg')"
		/>
		<div class="col-lg-6 order-lg-1 my-auto showcase-text">
			<h2><i class="bi bi-journal-minus" /> 古い曲を自動削除！</h2>
			<p class="lead mb-0">
				プレイリスト内でリリースから指定した期間が経過した曲を、自動で削除します。
			</p>
		</div>
	</div>
	<div class="row">
		<div
			class="col-lg-6 order-lg-2 text-white showcase-img"
			style="background-image: url('assets/img/bg-showcase-1.jpg')"
		/>
		<div class="col-lg-6 order-lg-1 my-auto showcase-text">
			<h2><i class="bi bi-headphones"></i> Let's enjoy music!</h2>
			<p class="lead mb-0">
				あなただけのオリジナルのプレイリストを作成して、音楽を楽しみましょう！
			</p>
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

	.showcase .showcase-text {
		padding: 3rem;
	}
	.showcase .showcase-img {
		min-height: 30rem;
		background-size: cover;
	}
	@media (min-width: 768px) {
		.showcase .showcase-text {
			padding: 7rem;
		}
	}
</style>
