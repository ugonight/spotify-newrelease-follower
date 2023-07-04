<script lang="ts">
	import { Modal, Button, ButtonGroup, Input } from 'flowbite-svelte';
	export let open = false;
</script>

<!-- Spotifyのニューリリース通知 -->
<!-- プレイリストに存在しているアーティスト -->
<!-- フォロー中のアーティスト・プレイリスト -->

<div>
	<Modal bind:open size="lg" title="アーティスト・プレイリストを追加">
		<div class="flex flex-col">
			<ButtonGroup size="sm" class="w-full">
				<Input type="search" placeholder="キーワードを入力" />
				<Button color="light" outline>
					<i class="bi bi-search me-2" /> Search
				</Button>
			</ButtonGroup>
		</div>
	</Modal>
</div>
