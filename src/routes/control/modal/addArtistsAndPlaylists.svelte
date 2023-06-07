<script lang="ts">
	import {
		Button,
		ListGroup,
		ListGroupItem,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Row,
		Col,
		Icon,
		Input,
		InputGroup,
		InputGroupText
	} from 'sveltestrap';
	export let open = false;
	const toggle = () => (open = !open);
</script>

<!-- Spotifyのニューリリース通知 -->
<!-- プレイリストに存在しているアーティスト -->
<!-- フォロー中のアーティスト・プレイリスト -->

<div>
	<Modal isOpen={open} {toggle} size="lg" scrollable style="height: 90%">
		<ModalHeader {toggle}>アーティスト・プレイリストを追加</ModalHeader>
		<ModalBody>
			<Row>
				<Col>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="キーワードを入力" />
						<button class="btn btn-outline-secondary" type="button">
							<i class="bi bi-search" /> 検索
						</button>
					</div>
				</Col>
			</Row>
		</ModalBody>
		<!-- <ModalFooter>
			<Button color="primary" on:click={toggle}>追加</Button>
			<Button color="secondary" on:click={toggle}>キャンセル</Button>
		</ModalFooter> -->
	</Modal>
</div>
