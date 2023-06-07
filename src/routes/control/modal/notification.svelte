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
		Icon
	} from 'sveltestrap';
	export let open = false;
	const toggle = () => (open = !open);
</script>

<div>
	<Modal isOpen={open} {toggle} size="lg" scrollable style="height: 90%">
		<ModalHeader {toggle}>通知</ModalHeader>
		<ModalBody>
			<ListGroup flush>
				<ListGroupItem>
					<Row class="align-items-center">
						<Col xs={4} lg={2}>yyyy/MM/dd</Col>
						<Col xs={8} lg={10}>「プレイリスト1」に「曲1」が追加されました。</Col>
					</Row>
				</ListGroupItem>
				{#each new Array(100) as cat}
					<ListGroupItem>
						<Row class="align-items-center">
							<Col xs={4} lg={2}>yyyy/MM/dd</Col>
							<Col xs={8} lg={10}>「プレイリスト2」から「曲2」が削除されました。</Col>
						</Row>
					</ListGroupItem>
				{/each}
			</ListGroup>
		</ModalBody>
		<!-- <ModalFooter>
			<Button color="primary" on:click={toggle}>追加</Button>
			<Button color="secondary" on:click={toggle}>キャンセル</Button>
		</ModalFooter> -->
	</Modal>
</div>
