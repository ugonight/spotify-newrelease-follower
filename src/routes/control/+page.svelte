<script lang="ts">
	import type { PageData } from './$types';
	import {
		Container,
		Row,
		Button,
		Tooltip,
		Nav,
		NavItem,
		NavLink,
		Icon,
		Badge,
		ListGroup,
		ListGroupItem
	} from 'sveltestrap';

	export let data: PageData;
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
				<h1 class="h2">管理プレイリスト一覧</h1>
				<div class="mb-2 mb-md-0">
					<span>
						<Button
							size="lg"
							class="bi bi-bell bg-transparent"
							color="light"
							id="btn-notification"
							style="position: relative;"
						>
							<h6 id="notification-badge"><Badge color="secondary" pill>4</Badge></h6>
						</Button>
						<Tooltip target="btn-notification" placement="bottom">通知</Tooltip>
					</span>
					<span>
						<Button size="lg" class="bi bi-gear bg-transparent" color="light" id="btn-setting" />
						<Tooltip target="btn-setting" placement="bottom">設定</Tooltip>
					</span>
				</div>
			</div>
			<div>
				<span>
					<Button class="bi bi-folder-plus" outline  color="secondary" id="btn-add-from-exist" />
					<Tooltip target="btn-add-from-exist" placement="bottom">既存プレイリストを管理対象に追加</Tooltip>
				</span>
				<span>
					<Button class="bi bi-file-earmark-plus" outline  color="secondary" id="btn-add-new" />
					<Tooltip target="btn-add-new" placement="bottom">新規プレイリストを作成して管理</Tooltip>
				</span>
				<hr class="my-3"/>
				<ul class="list-group list-group-flush">
					<a href="#" class="list-group-item list-group-item-action playlist-list-item"
						>プレイリスト1</a
					>
					<a href="#" class="list-group-item list-group-item-action playlist-list-item"
						>プレイリスト2</a
					>
					<a href="#" class="list-group-item list-group-item-action playlist-list-item"
						>プレイリスト3</a
					>
				</ul>
			</div>
		</main>
	</Row>
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

	#notification-badge {
		position: absolute;
		top: 0.2rem;
		left: 1.7rem;
	}

	.playlist-list-item {
		padding: 1rem 1rem;
	}
</style>
