<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="container">
	<div class="row my-4 text-center">
		<div class="col">
			<h1>お問い合わせ</h1>
		</div>
	</div>
	<div class="row my-3 text-center">
		<div class="col">ご意見・ご要望・その他何かありましたら、こちらまでご連絡をお願いします。</div>
	</div>
	{#if form?.status == 'success'}
		<div class="alert alert-success d-flex align-items-center" role="alert">
			<i class="bi bi-check-circle-fill" />
			<div> 送信に成功しました。</div>
		</div>
	{:else if form?.status == 'error'}
		<div class="alert alert-danger d-flex align-items-center" role="alert">
			<i class="bi bi-exclamation-triangle-fill" />
			<div> 送信に失敗しました。しばらく経ってから再度お試しください。</div>
		</div>
	{/if}
	<div class="row mb-5">
		<div class="col mx-6">
			<div class="card">
				<div class="card-body bg-light text-left">
					<form class="needs-validation" method="POST">
						<div class="mb-3">
							<label for="name" class="form-label"
								>お名前<span class="text-danger">(必須)</span></label
							>
							<input type="text" class="form-control" id="name" name="name" required />
						</div>
						<div class="mb-3">
							<label for="email" class="form-label"
								>メールアドレス<span class="text-danger">(必須)</span></label
							>
							<input type="email" class="form-control" id="email" name="email" required />
						</div>
						<div class="mb-3">
							<label for="content" class="form-label"
								>内容<span class="text-danger">(必須)</span></label
							>
							<textarea class="form-control" id="content" name="content" rows="5" required />
						</div>
						<button type="submit" class="btn btn-secondary">送信</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
