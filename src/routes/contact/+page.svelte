<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { Alert, Card, Button, Label, Input, Textarea } from 'flowbite-svelte';

	export let form: ActionData;
</script>

<div class="container mx-auto flex flex-col px-3 py-4">
	<div class="my-4 text-center">
		<h1 class="text-4xl font-bold">お問い合わせ</h1>
	</div>
	<div class="my-3 text-center">
		ご意見・ご要望・その他何かありましたら、こちらでご連絡をお願いします。
	</div>
	{#if form?.status == 'success'}
		<Alert color="green" class="d-flex align-items-center" role="alert">
			<i class="bi-check-circle-fill" />
			<div>送信に成功しました。</div>
		</Alert>
	{:else if form?.status == 'error'}
		<Alert color="red" class="d-flex align-items-center" role="alert">
			<i class="bi-exclamation-triangle-fill" />
			<div>送信に失敗しました。しばらく経ってから再度お試しください。</div>
		</Alert>
	{/if}
	<div class="mb-5">
		<Card class="mx-auto" size="xl">
			<form class="needs-validation" method="POST">
				<div class="mb-3">
					<Label for="name">お名前<span class="text-red-500">(必須)</span></Label>
					<Input type="text" id="name" name="name" required />
				</div>
				<div class="mb-3">
					<Label for="email">メールアドレス<span class="text-red-500">(必須)</span></Label>
					<Input type="email" id="email" name="email" required />
				</div>
				<div class="mb-3">
					<Label for="content">内容<span class="text-red-500">(必須)</span></Label>
					<Textarea id="content" name="content" rows="5" required />
				</div>
				<Button color="light" type="submit">送信</Button>
			</form>
		</Card>
	</div>
</div>
