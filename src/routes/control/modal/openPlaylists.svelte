<script lang="ts">
	import { Button, Modal, Table, TableBody, TableBodyRow, TableBodyCell } from 'flowbite-svelte';
	export let open = false;
	const toggle = () => (open = !open);
</script>

<div>
	<Modal bind:open size="lg" title="自分のプレイリストから追加">
		<div class="flex flex-col">
			<div class="flex flex-row border-b border-slate-500 px-2 py-2 items-center">
				<Button size="sm" outline color="primary">追加</Button>
				<span class="ms-3">プレイリスト1</span>
			</div>
			<div class="flex flex-row border-b border-slate-500 px-2 py-2 items-center">
				<Button size="sm" outline color="primary">追加</Button>
				<span class="ms-3">プレイリスト2</span>
			</div>
			<div class="flex flex-row border-b border-slate-500 px-2 py-2 items-center">
				<Button size="sm" outline color="primary">追加</Button>
				<span class="ms-3">プレイリスト3</span>
			</div>
		</div>
	</Modal>
</div>
