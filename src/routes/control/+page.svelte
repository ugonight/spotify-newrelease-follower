<script lang="ts">
	import List from './list.svelte';
	import Detail from './detail.svelte';
	import Notification from './modal/notification.svelte';
	import type { StateType } from '$lib/entity';

	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { Button, Tooltip, Badge, Indicator } from 'flowbite-svelte';

	let openNotificationModal = false;

	export let data: PageData;

	let state: StateType = 'list';
</script>

<div class="container">
	<div class="grid min-h-full grid-cols-12">
		<!-- サイドバー -->
		<nav class="hidden bg-slate-200 lg:col-span-2 lg:block">
			<ul class="flex flex-col align-middle">
				<h6 class="mb-1 mt-4 items-center justify-between px-3 text-sm uppercase">
					<span>Managed Playlists</span>
					<a class="ms-1 items-center text-slate-400 hover:text-slate-900" href="#">
						<i class="bi bi-plus-circle" />
					</a>
				</h6>
				<div class="mb-2 ms-3 flex flex-col">
					<a href="#" class="text-slate-400 hover:text-slate-900">
						<i class="bi bi-music-note-list" />
						Playlist 1
					</a>
					<a href="#" class="text-slate-400 hover:text-slate-900">
						<i class="bi bi-music-note-list" />
						Playlist 2
					</a>
					<a href="#" class="text-slate-400 hover:text-slate-900">
						<i class="bi bi-music-note-list" />
						Playlist 3
					</a>
				</div>
			</ul>
		</nav>

		<!-- メイン -->
		<main class="col-span-12 px-4 pt-3 lg:col-span-10">
			<div class="mb-3 flex flex-wrap items-center justify-between border-b pb-2 md:flex-nowrap">
				<div class="flex">
					{#if state == 'detail'}
						<Button
							class="bi bi-chevron-left me-2"
							color="light"
							outline
							id="btn-back-list"
							on:click={() => (state = 'list')}
						/>
						<div class="main-head-text ms-3 hidden sm:block">プレイリスト1</div>
					{:else}
						<div class="main-head-text">管理プレイリスト一覧</div>
					{/if}
				</div>

				<div class="md:me-5">
					<span class="me-2">
						<Button
							class="bi bi-bell relative"
							color="light"
							outline
							id="btn-notification"
							on:click={() => (openNotificationModal = true)}
						>
							<Indicator
								color="gray"
								border
								size="xl"
								placement="top-right"
								class="text-xs font-bold">4</Indicator
							>
						</Button>
					</span>
					<span>
						<Button class="bi bi-gear" color="light" outline id="btn-setting" />
					</span>
				</div>
			</div>

			{#if state === 'list'}
				<div transition:fade={{ duration: 100 }}>
					<List bind:state />
				</div>
			{:else}
				<div transition:fade={{ duration: 100 }}>
					<Detail />
				</div>
			{/if}
		</main>
	</div>
	<Notification bind:open={openNotificationModal} />
</div>