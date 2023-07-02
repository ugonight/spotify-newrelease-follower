<script lang="ts">
	import { Modal, Button } from 'flowbite-svelte';
	export let open = false;
</script>

<!-- Spotifyのニューリリース通知 -->
<!-- プレイリストに存在しているアーティスト -->
<!-- フォロー中のアーティスト・プレイリスト -->

<div>
	<Modal bind:open size="lg" title="アーティスト・プレイリストを追加">
		<div class="input-group">
			<input type="text" class="form-control me-3" placeholder="キーワードを入力" />
			<Button color="light" outline>
				<i class="bi bi-search" /> 検索
			</Button>
		</div>
	</Modal>
</div>
