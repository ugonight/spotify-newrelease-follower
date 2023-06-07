<script lang="ts">
	import {
		Row,
		Col,
		Button,
		Tooltip,
		Badge,
		Card,
		CardBody,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle,
		Accordion,
		AccordionItem,
		Image,
		Container,
		Table,
		Icon,
		ListGroup,
		ListGroupItem,
		Form,
		FormGroup,
		Input,
		InputGroup,
		InputGroupText
	} from 'sveltestrap';

	import AddArtistsAndPlaylists from './modal/addArtistsAndPlaylists.svelte';

	import type { StateType } from '$lib/entity';

	let openAddArtistsAndPlaylists = false;

	let radioGroup: number;
</script>

<Container class="my-3">
	<Row class="my-2 text-center">
		<Col md={2} />
		<Col md={3}><Image class="my-3" thumbnail alt="Playlist Image" src="" /></Col>
		<Col md={5}>
			<h1>プレイリスト名</h1>
			曲数, 公開／非公開<br />
			監視対象アーティスト数: 1<br />
			監視対象プレイリスト数: 1<br />
			期間: 1年間<br />
		</Col>
		<Col md={2} />
	</Row>
	<Row class="my-2">
		<Col>
			<Accordion>
				<AccordionItem header="履歴">
					<div class="overflow-auto" style="height: 50vh;">
						<ListGroup flush>
							<ListGroupItem class="bg-success bg-opacity-10">
								<Row>
									<Col xs="3" class="d-flex">
										<Icon name="plus" />
										<span class="d-none d-md-block"> 追加</span>
									</Col>
									<Col xs="4">曲名1</Col>
									<Col xs="3" class="d-none d-md-block">アーティスト1</Col>
									<Col xs="2" class="d-none d-md-block">yyyy/MM/dd</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem class="bg-danger bg-opacity-10">
								<Row>
									<Col xs="3" class="d-flex">
										<Icon name="dash" />
										<span class="d-none d-md-block"> 削除</span>
									</Col>
									<Col xs="4">曲名2</Col>
									<Col xs="3" class="d-none d-md-block" />
									<Col xs="2" class="d-none d-md-block">yyyy/MM/dd</Col>
								</Row>
							</ListGroupItem>
						</ListGroup>
					</div>
				</AccordionItem>
			</Accordion>
		</Col>
	</Row>

	<Row class="sticky-top border-bottom bg-white my-3 align-items-center">
		<Col>
			<h2>設定</h2>
		</Col>
		<Col class="ms-auto">
			<Button color="secondary" block class="my-2">変更を保存</Button>
		</Col>
	</Row>

	<Row>
		<Col>
			<Card class="mb-3">
				<CardHeader>監視対象</CardHeader>
				<CardBody>
					<span>
						<Button class="bi bi-plus-lg" outline color="secondary" id="btn-add-watch" on:click={() => (openAddArtistsAndPlaylists = true)}/>
						<Tooltip target="btn-add-watch" placement="bottom">管理対象を追加</Tooltip>
					</span>
					<div class="overflow-auto" style="height: 50vh;">
						<Table hover>
							<thead>
								<tr>
									<th>#</th>
									<th>名前</th>
									<th>削除</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td><Icon name="person" /> アーティスト1</td>
									<td>
										<Icon
											class="link-danger"
											name="dash-circle-fill"
											style="cursor: pointer;"
											onclick={() => {}}
										/>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td><Icon name="music-note-list" /> プレイリスト1</td>
									<td>
										<Icon
											class="link-danger"
											name="dash-circle-fill"
											style="cursor: pointer;"
											onclick={() => {}}
										/>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
	<Row>
		<Col>
			<Card class="mb-3">
				<CardHeader>自動削除期間</CardHeader>
				<CardBody>
					<Form>
						<FormGroup>
							<Row class="my-3">
								<Col>
									<Input
										id="r0"
										type="radio"
										bind:group={radioGroup}
										value={0}
										label="削除しない"
									/>
								</Col>
							</Row>
							<Row class="my-3">
								<Col>
									<Row class="mb-2">
										<Col>
											<Input
												id="r1"
												type="radio"
												bind:group={radioGroup}
												value={1}
												label="リリース日から経過した曲を削除"
											/>
										</Col>
									</Row>
									<Row class="ms-4">
										<Col>
											<InputGroup class="my-1">
												<InputGroupText>年</InputGroupText>
												<Input
													type="number"
													name="number"
													id="exampleDate"
													value="0"
													min="0"
													disabled={radioGroup !== 1}
												/>
											</InputGroup>
											<InputGroup class="my-1">
												<InputGroupText>月</InputGroupText>
												<Input
													type="number"
													name="number"
													id="exampleDate"
													value="0"
													min="0"
													disabled={radioGroup !== 1}
												/>
											</InputGroup>
											<InputGroup class="my-1">
												<InputGroupText>日</InputGroupText>
												<Input
													type="number"
													name="number"
													id="exampleDate"
													value="0"
													min="0"
													disabled={radioGroup !== 1}
												/>
											</InputGroup>
										</Col>
										<Col xs={0} lg={4} />
									</Row>
								</Col>
							</Row>
							<Row class="my-3">
								<Col>
									<Row class="mb-2">
										<Col>
											<Input
												id="r2"
												type="radio"
												bind:group={radioGroup}
												value={2}
												label="指定期間内にリリースされた曲以外を削除"
											/>
										</Col>
									</Row>
									<Row class="ms-4">
										<Col>
											<Row class="align-items-center">
												<Col sm={5}>
													<Input
														type="date"
														name="date"
														id="exampleDate"
														placeholder="date placeholder"
														disabled={radioGroup !== 2}
													/>
												</Col>
												<Col sm={2} class="text-center">～</Col>
												<Col sm={5}>
													<Input
														type="date"
														name="date"
														id="exampleDate"
														placeholder="date placeholder"
														disabled={radioGroup !== 2}
													/>
												</Col>
											</Row>
										</Col>
										<Col xs={0} lg={4} />
									</Row>
								</Col>
							</Row>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</Col>
	</Row>
	<Row>
		<Col>
			<Card class="mb-3">
				<CardHeader>その他設定</CardHeader>
				<CardBody>
					<FormGroup>
						<Input id="c1" type="checkbox" label="同じアーティストの同じ曲名の曲は追加しない" />
					</FormGroup>
				</CardBody>
			</Card>
		</Col>
	</Row>

	<AddArtistsAndPlaylists bind:open={openAddArtistsAndPlaylists} />
</Container>

<!-- <Accordion stayOpen>
		<AccordionItem class="my-2" active header="監視対象">Alpha Flight</AccordionItem>
		<AccordionItem class="my-2" active header="期間">Johnny Bravo</AccordionItem>
		<AccordionItem class="my-2" active header="その他設定">Charlie Brown</AccordionItem>
	</Accordion> -->
