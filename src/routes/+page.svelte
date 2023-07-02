<script>
	import { Button } from 'flowbite-svelte';
</script>

<!-- Masthead-->
<header class="relative basis-full bg-slate-800 bg-cover pb-32 pt-32">
	<div class="relative justify-center">
		<div class="text-center text-white">
			<!-- Page heading-->
			<h1 class="mb-7 text-4xl">Spotify新曲プレイリスト<br class="sm:hidden" />自動管理ツール</h1>
			<Button color="green" size="lg" href="/login">Spotify でログインしてはじめる</Button>
			<p class="mt-3">
				<small>
					ログインすると
					<a href="/terms-of-use" class="text-slate-100 underline">利用規約</a>・
					<a href="/privacy-policy" class="text-slate-100 underline">プライバシーポリシー</a>・
					<a href="/cookie-policy" class="text-slate-100 underline">Cookie ポリシー</a>
					に同意したものとみなされます。
				</small>
			</p>
		</div>
	</div>
</header>

<section class="bg-light basis-full py-28 text-center">
	<div class="grid grid-cols-1 lg:grid-cols-3">
		<div>
			<div class="mb-lg-0 mb-lg-3 mx-auto mb-5 max-w-xs">
				<div class="flex h-28">
					<i class="bi bi-journal-plus m-auto text-7xl text-blue-700" />
				</div>
				<h3 class="mb-2 text-3xl font-bold">新曲を自動追加！</h3>
				<p class="lead mb-0">
					アーティストのニューリリースを監視して、すばやくプレイリストに追加します。
				</p>
			</div>
		</div>
		<div>
			<div class="mb-lg-0 mb-lg-3 mx-auto mb-5 max-w-xs">
				<div class="flex h-28">
					<i class="bi bi-journal-minus m-auto text-7xl text-blue-700" />
				</div>
				<h3 class="mb-2 text-3xl font-bold">古い曲を自動削除！</h3>
				<p class="lead mb-0">
					プレイリスト内でリリースから指定した期間が経過した曲を、自動で削除します。
				</p>
			</div>
		</div>
		<div>
			<div class="mb-lg-3 mx-auto mb-0 max-w-xs">
				<div class="flex h-28">
					<i class="bi bi-headphones m-auto text-7xl text-blue-700" />
				</div>
				<h3 class="mb-2 text-3xl font-bold">Let's enjoy your music!</h3>
				<p class="lead mb-0">
					あなただけのオリジナルのプレイリストを作成して、音楽を楽しみましょう！
				</p>
			</div>
		</div>
	</div>
</section>
