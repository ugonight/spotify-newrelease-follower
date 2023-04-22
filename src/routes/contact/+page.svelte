<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { Container, Row, Col, Alert, Icon, Card, CardBody, Form, Button } from 'sveltestrap';

	export let form: ActionData;
</script>

<Container class="py-4 px-3 mx-auto">
	<Row class="my-4 text-center">
		<Col>
			<h1>お問い合わせ</h1>
		</Col>
	</Row>
	<Row class="my-3 text-center">
		<Col>ご意見・ご要望・その他何かありましたら、こちらでご連絡をお願いします。</Col>
	</Row>
	{#if form?.status == 'success'}
		<Alert color="success" class="d-flex align-items-center" role="alert">
			<Icon name="check-circle-fill" />
			<div>送信に成功しました。</div>
		</Alert>
	{:else if form?.status == 'error'}
		<Alert color="danger" class="d-flex align-items-center" role="alert">
			<Icon name="exclamation-triangle-fill" />
			<div>送信に失敗しました。しばらく経ってから再度お試しください。</div>
		</Alert>
	{/if}
	<Row class="mb-5">
		<Col class="mx-6">
			<Card>
				<CardBody class="bg-light text-left">
					<Form class="needs-validation" method="POST">
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
						<Button color="secondary" type="submit">送信</Button>
					</Form>
				</CardBody>
			</Card>
		</Col>
	</Row>
</Container>
