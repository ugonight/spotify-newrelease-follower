<script lang="ts">
	import {
		Modal,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
	} from 'flowbite-svelte';
	export let open = false;
	const toggle = () => (open = !open);
</script>

<div>
	<Modal bind:open size="lg"  title="通知">
		<Table>
			<TableBody>
				<TableBodyRow>
					<TableBodyCell>yyyy/MM/dd</TableBodyCell>
					<TableBodyCell>「プレイリスト1」に「曲1」が追加されました。</TableBodyCell>
				</TableBodyRow>
				{#each new Array(100) as cat}
					<TableBodyRow>
						<TableBodyCell>yyyy/MM/dd</TableBodyCell>
						<TableBodyCell>「プレイリスト1」に「曲1」が追加されました。</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</Modal>
</div>
