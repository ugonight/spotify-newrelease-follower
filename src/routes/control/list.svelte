<script lang="ts">
	import { Row, Col, Button, Tooltip, Badge } from 'sveltestrap';
	import type { StateType } from '$lib/entity';

	export let state: StateType;

	function handlePlaylistItemClick(index: number) {
		state = 'detail';
	}
</script>

<div>
	<span>
		<Button class="bi bi-folder-plus" outline color="secondary" id="btn-add-from-exist" />
		<Tooltip target="btn-add-from-exist" placement="bottom"
			>既存プレイリストを管理対象に追加</Tooltip
		>
	</span>
	<span>
		<Button class="bi bi-file-earmark-plus" outline color="secondary" id="btn-add-new" />
		<Tooltip target="btn-add-new" placement="bottom">新規プレイリストを作成して管理</Tooltip>
	</span>
	<hr class="my-3" />
	<div class="d-none d-md-block">
		<Row class="mx-1 my-2 border-bottom">
			<Col xs="5">プレイリスト名</Col>
			<Col xs="3">曲数</Col>
			<Col xs="4">更新日時</Col>
		</Row>
	</div>
	<ul class="list-group list-group-flush">
		<button
			type="button"
			class="list-group-item list-group-item-action playlist-list-item"
			on:click={() => handlePlaylistItemClick(0)}
		>
			<Row>
				<Col xs="5">プレイリスト1</Col>
				<Col xs="3" class="d-none d-md-block">10</Col>
				<Col xs="4" class="d-none d-md-block">2023/10/12</Col>
			</Row>
		</button>
		<button
			type="button"
			class="list-group-item list-group-item-action playlist-list-item"
			on:click={() => handlePlaylistItemClick(1)}
		>
			<Row>
				<Col xs="5">プレイリスト2</Col>
				<Col xs="3" class="d-none d-md-block">12</Col>
				<Col xs="4" class="d-none d-md-block">2023/10/12</Col>
			</Row>
		</button>
		<button
			type="button"
			class="list-group-item list-group-item-action playlist-list-item"
			on:click={() => handlePlaylistItemClick(2)}
		>
			<Row>
				<Col xs="5">プレイリスト3</Col>
				<Col xs="3" class="d-none d-md-block">3</Col>
				<Col xs="4" class="d-none d-md-block">2023/10/12</Col>
			</Row>
		</button>
	</ul>
</div>

<style>
	.playlist-list-item {
		padding: 1rem 1rem;
	}
</style>
