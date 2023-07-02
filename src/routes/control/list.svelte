<script lang="ts">
	import {
		Button,
		Tooltip,
		Badge,
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell
	} from 'flowbite-svelte';
	import type { StateType } from '$lib/entity';

	import OpenPlaylistsModal from './modal/openPlaylists.svelte';

	export let state: StateType;
	let openOpenPlaylistsModal = false;

	function handlePlaylistItemClick(index: number) {
		state = 'detail';
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-row">
		<span class="me-3">
			<Button
				class="bi bi-folder-plus"
				outline
				color="light"
				id="btn-add-from-exist"
				on:click={() => (openOpenPlaylistsModal = true)}
			/>
			<Tooltip target="btn-add-from-exist" placement="bottom"
				>既存プレイリストを管理対象に追加</Tooltip
			>
		</span>
		<span>
			<Button class="bi bi-file-earmark-plus" outline color="light" id="btn-add-new" />
			<Tooltip target="btn-add-new" placement="bottom">新規プレイリストを作成して管理</Tooltip>
		</span>
	</div>
	<hr class="my-3" />

	<Table hoverable striped>
		<TableHead>
			<TableHeadCell>プレイリスト名</TableHeadCell>
			<TableHeadCell>曲数</TableHeadCell>
			<TableHeadCell>更新日時</TableHeadCell>
		</TableHead>
		<TableBody>
			<TableBodyRow on:click={() => handlePlaylistItemClick(0)} class="cursor-pointer">
				<TableBodyCell>プレイリスト1</TableBodyCell>
				<TableBodyCell>10</TableBodyCell>
				<TableBodyCell>2023/10/12</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow on:click={() => handlePlaylistItemClick(1)} class="cursor-pointer">
				<TableBodyCell>プレイリスト2</TableBodyCell>
				<TableBodyCell>12</TableBodyCell>
				<TableBodyCell>2023/10/12</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow on:click={() => handlePlaylistItemClick(2)} class="cursor-pointer">
				<TableBodyCell>プレイリスト3</TableBodyCell>
				<TableBodyCell>10</TableBodyCell>
				<TableBodyCell>2023/10/12</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</div>

<OpenPlaylistsModal bind:open={openOpenPlaylistsModal} />
