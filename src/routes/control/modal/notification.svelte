<script lang="ts">
	import { Modal, Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
	export let open = false;
	const toggle = () => (open = !open);
</script>

<Modal bind:open size="lg" title="通知">
	<div class="flex flex-col">
		{#each [...Array(100)].map((_, i) => i) as i}
			<div class="flex flex-row px-2 py-2 text-xs md:text-sm items-center border-b border-gray-200">
				<span class="me-2">yyyy/MM/dd</span>
				<span class="">「プレイリスト1」に「曲{i}」が追加されました。</span>
			</div>
		{/each}
	</div>
</Modal>
