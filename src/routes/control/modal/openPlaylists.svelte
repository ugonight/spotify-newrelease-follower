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
	<Modal isOpen={open} {toggle} scrollable style="height: 90%">
		<ModalHeader {toggle}>自分のプレイリストから追加</ModalHeader>
		<ModalBody>
			<ListGroup flush>
				<ListGroupItem>
					<Row class="align-items-center">
						<Col xs={3} md={2}><Button size="sm" outline color="primary">追加</Button></Col>
						<Col xs={9} md={10}>プレイリスト1</Col>
					</Row>
				</ListGroupItem>
				<ListGroupItem>
					<Row class="align-items-center">
						<Col xs={3} md={2}><Button size="sm" outline color="primary">追加</Button></Col>
						<Col xs={9} md={10}>プレイリスト2</Col>
					</Row>
				</ListGroupItem>
				<ListGroupItem>
					<Row class="align-items-center">
						<Col xs={3} md={2}><Button size="sm" outline color="primary">追加</Button></Col>
						<Col xs={9} md={10}>プレイリスト3</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</ModalBody>
		<!-- <ModalFooter>
			<Button color="primary" on:click={toggle}>追加</Button>
			<Button color="secondary" on:click={toggle}>キャンセル</Button>
		</ModalFooter> -->
	</Modal>
</div>
