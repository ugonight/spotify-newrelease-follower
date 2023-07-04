<script lang="ts">
	import {
		Button,
		Tooltip,
		Badge,
		Card,
		Accordion,
		AccordionItem,
		Img,
		Table,
		Input,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Radio,
		ButtonGroup,
		InputAddon,
		Checkbox
	} from 'flowbite-svelte';

	import AddArtistsAndPlaylists from './modal/addArtistsAndPlaylists.svelte';

	import type { StateType } from '$lib/entity';

	let openAddArtistsAndPlaylists = false;

	let radioGroup: number;
</script>

<div class="container my-3 flex flex-col">
	<div class="my-2 flex flex-col justify-center md:flex-row">
		<Img class="mx-auto my-3" alt="Playlist Image" src="" />
		<div class="mx-auto">
			<h1 class="my-6 text-center text-4xl font-bold">プレイリスト名</h1>
			<ul class="list-disc text-left text-sm text-gray-500">
				<li>曲数, 公開／非公開</li>
				<li>監視対象アーティスト数: 1</li>
				<li>監視対象プレイリスト数: 1</li>
				<li>期間: 1年間</li>
			</ul>
		</div>
	</div>
	<div class="my-2">
		<Accordion>
			<AccordionItem paddingDefault="p-3">
				<span slot="header">履歴</span>
				<div class="overflow-auto text-sm" style="height: 50vh;">
					{#each new Array(100) as cat}
						<div
							class="grid grid-cols-12 items-center gap-1 border-b bg-green-100 py-2 text-green-700"
						>
							<span class="col-span-3 md:col-span-2">
								<i class="bi bi-plus" />
								<span> 追加</span>
							</span>
							<span class="col-span-9 md:col-span-5"> 曲名1 </span>
							<span class="hidden md:block md:col-span-3"> アーティスト1 </span>
							<span class="hidden md:block md:col-span-2"> yyyy/MM/dd </span>
						</div>
						<div class="grid grid-cols-12 items-center gap-1 border-b bg-red-100 py-2 text-red-700">
							<span class="col-span-3 md:col-span-2">
								<i class="bi bi-dash" />
								<span> 削除</span>
							</span>
							<span class="col-span-9 md:col-span-5"> 曲名2 </span>
							<span class="hidden md:block md:col-span-3" />
							<span class="hidden md:block md:col-span-2"> yyyy/MM/dd </span>
						</div>
					{/each}
				</div>
			</AccordionItem>
		</Accordion>
	</div>

	<div class="sticky top-0 z-10 my-3 flex flex-row items-center border-b bg-white">
		<div>
			<h2 class="ms-3 text-2xl">設定</h2>
		</div>
		<div class="ms-auto">
			<Button color="light" block class="my-2">変更を保存</Button>
		</div>
	</div>

	<Card class="mb-3 flex flex-col" size="xl">
		<h3 class="mb-3 border-b text-xl">監視対象</h3>
		<Button
			class="bi bi-plus-lg my-3"
			outline
			size="sm"
			color="light"
			id="btn-add-watch"
			on:click={() => (openAddArtistsAndPlaylists = true)}
		/>
		<Tooltip target="btn-add-watch" class="z-10" placement="bottom">管理対象を追加</Tooltip>
		<div class="overflow-auto" style="height: 50vh;">
			<Table hoverable>
				<TableHead>
					<TableHeadCell>#</TableHeadCell>
					<TableHeadCell>名前</TableHeadCell>
					<TableHeadCell>削除</TableHeadCell>
				</TableHead>
				<TableBody>
					<TableBodyRow>
						<TableBodyCell tdClass="font-bold">1</TableBodyCell>
						<TableBodyCell><i class="bi bi-person" /> アーティスト1</TableBodyCell>
						<TableBodyCell>
							<button
								class="bi bi-dash-circle-fill cursor-pointer text-red-600 hover:text-red-800"
								on:click={() => {}}
							/>
						</TableBodyCell>
					</TableBodyRow>
					<TableBodyRow>
						<TableBodyCell tdClass="font-bold">2</TableBodyCell>
						<TableBodyCell><i class="bi bi-music-note-list" /> プレイリスト1</TableBodyCell>
						<TableBodyCell>
							<button
								class="bi bi-dash-circle-fill cursor-pointer text-red-600 hover:text-red-800"
								on:click={() => {}}
							/>
						</TableBodyCell>
					</TableBodyRow>
				</TableBody>
			</Table>
		</div>
	</Card>
	<Card class="mb-3" size="xl">
		<h3 class="mb-3 border-b text-xl">自動削除期間</h3>
		<form class="flex flex-col">
			<div class="my-3">
				<Radio id="r0" bind:group={radioGroup} value={0}>削除しない</Radio>
			</div>
			<div class="my-3">
				<Radio id="r1" bind:group={radioGroup} value={1} class="mb-2">
					リリース日から時間が経過した曲を削除
				</Radio>
				<div class="ms-4 flex flex-col">
					<ButtonGroup class="my-1">
						<InputAddon>年</InputAddon>
						<Input
							type="number"
							name="number"
							id="exampleDate"
							value="0"
							min="0"
							disabled={radioGroup !== 1}
						/>
					</ButtonGroup>
					<ButtonGroup class="my-1">
						<InputAddon>月</InputAddon>
						<Input
							type="number"
							name="number"
							id="exampleDate"
							value="0"
							min="0"
							disabled={radioGroup !== 1}
						/>
					</ButtonGroup>
					<ButtonGroup class="my-1">
						<InputAddon>日</InputAddon>
						<Input
							type="number"
							name="number"
							id="exampleDate"
							value="0"
							min="0"
							disabled={radioGroup !== 1}
						/>
					</ButtonGroup>
				</div>
			</div>
			<div class="my-3">
				<Radio id="r2" type="radio" bind:group={radioGroup} value={2}>
					指定期間内にリリースされた曲以外を削除
				</Radio>
				<div class="ms-4 mt-3 flex flex-col items-center">
					<Input
						type="date"
						name="date"
						id="exampleDate"
						placeholder="date placeholder"
						disabled={radioGroup !== 2}
					/>
					<div class="text-center">～</div>
					<Input
						type="date"
						name="date"
						id="exampleDate"
						placeholder="date placeholder"
						disabled={radioGroup !== 2}
					/>
				</div>
			</div>
		</form>
	</Card>
	<Card class="mb-3" size="xl">
		<h3 class="mb-3 border-b text-xl">その他設定</h3>
		<Checkbox id="c1">同じアーティストの同じ曲名の曲は追加しない</Checkbox>
	</Card>

	<AddArtistsAndPlaylists bind:open={openAddArtistsAndPlaylists} />
</div>
