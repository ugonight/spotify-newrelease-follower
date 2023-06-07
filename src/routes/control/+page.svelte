<script lang="ts">
	import List from './list.svelte';
	import Detail from './detail.svelte';
	import Notification from './modal/notification.svelte';
	import type { StateType } from '$lib/entity';

	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import { Container, Row, Nav, NavItem, NavLink, Icon, Button, Tooltip, Badge } from 'sveltestrap';

	let openNotificationModal = false;

	$: isAnyModalOpen = openNotificationModal;

	export let data: PageData;

	let state: StateType = 'list';
</script>

<Container fluid>
	<Row class="min-vh-100">
		<!-- サイドバー -->
		<nav class="col-md-2 d-none d-md-block bg-light sidebar">
			<ul class="nav flex-column align-middle">
				<h6
					class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
				>
					<span>Managed Playlists</span>
					<a class="d-flex align-items-center text-muted" href="#">
						<Icon name="plus-circle" />
					</a>
				</h6>
				<Nav class="flex-column mb-2">
					<NavItem>
						<NavLink href="#">
							<Icon name="music-note-list" />
							Playlist 1
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<Icon name="music-note-list" />
							Playlist 2
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<Icon name="music-note-list" />
							Playlist 3
						</NavLink>
					</NavItem>
				</Nav>
			</ul>
		</nav>

		<!-- メイン -->
		<main class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
			<div
				class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
			>
				<div class="d-flex">
					{#if state == 'detail'}
						<Button
							class="bi bi-chevron-left me-2"
							color="secondary"
							outline
							id="btn-back-list"
							on:click={() => (state = 'list')}
						/>
						<div class="d-none d-sm-block ms-3 main-head-text">プレイリスト1</div>
					{:else}
						<div class="main-head-text">管理プレイリスト一覧</div>
					{/if}
				</div>

				<div class="me-md-5">
					<span class="me-2">
						<Button
							class="bi bi-bell position-relative"
							color="secondary"
							outline
							id="btn-notification"
							on:click={() => (openNotificationModal = true)}
						>
							<Badge
								color="secondary"
								pill
								class="position-absolute top-0 start-100 translate-middle"
							>
								4
							</Badge>
						</Button>
						{#if isAnyModalOpen}
							<Tooltip target="btn-notification" placement="bottom">通知</Tooltip>
						{/if}
					</span>
					<span>
						<Button class="bi bi-gear" color="secondary" outline id="btn-setting" />
						{#if isAnyModalOpen}
							<Tooltip target="btn-setting" placement="bottom">設定</Tooltip>
						{/if}
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
	</Row>

	<Notification bind:open={openNotificationModal} />
</Container>

<style>
	/*
 * Sidebar
 */

	.sidebar {
		top: 48px;
		bottom: 0;
		left: 0;
		z-index: 0; /* Behind the navbar */
		padding: 0;
		box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
		overflow-x: hidden;
		overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
	}

	.sidebar-sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 48px; /* Height of navbar */
		height: calc(100vh - 48px);
		padding-top: 0.5rem;
		overflow-x: hidden;
		overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
	}

	.sidebar .nav-link {
		font-weight: 500;
		color: #333;
	}

	.sidebar .nav-link .feather {
		margin-right: 4px;
		color: #999;
	}

	.sidebar .nav-link.active {
		color: #007bff;
	}

	.sidebar .nav-link:hover .feather,
	.sidebar .nav-link.active .feather {
		color: inherit;
	}

	.sidebar-heading {
		font-size: 0.75rem;
		text-transform: uppercase;
	}

	/*
 * Navbar
 */

	.navbar-brand {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 1rem;
		background-color: rgba(0, 0, 0, 0.25);
		box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
	}

	.navbar .form-control {
		padding: 0.75rem 1rem;
		border-width: 0;
		border-radius: 0;
	}

	.form-control-dark {
		color: #fff;
		background-color: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.1);
	}

	.form-control-dark:focus {
		border-color: transparent;
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
	}

	/*
 * Utilities
 */

	.border-top {
		border-top: 1px solid #e5e5e5;
	}
	.border-bottom {
		border-bottom: 1px solid #e5e5e5;
	}

	.main-head-text {
		font-size: 2rem;
		font-weight: bold;
	}

	@media (max-width: 575.98px) {
		.main-head-text {
			font-size: 1.5rem;
		}
	}
</style>
