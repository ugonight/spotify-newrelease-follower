<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Control Page</h1>
<div>Welcome to {@html data.username}!</div>
