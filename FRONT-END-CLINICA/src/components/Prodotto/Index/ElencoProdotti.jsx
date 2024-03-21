import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchListaProdotti } from "../../../redux/actions/prodotto";

//           _____                    _____                    _____                    _____                    _____
//          /\    \                  /\    \                  /\    \                  /\    \                  /\    \
//         /::\____\                /::\    \                /::\    \                /::\    \                /::\    \
//        /:::/    /               /::::\    \              /::::\    \              /::::\    \              /::::\    \
//       /:::/    /               /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \
//      /:::/    /               /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \
//     /:::/____/               /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \
//    /::::\    \              /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \
//   /::::::\____\________    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \
//  /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\ ___\  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\
// /:::/  |:::::::::::\____\/:::/__\:::\   \:::\____\/:::/__\:::\   \:::|    |/:::/  \:::\   \:::\____\/:::/  \:::\   \:::|    |
// \::/   |::|~~~|~~~~~     \:::\   \:::\   \::/    /\:::\   \:::\  /:::|____|\::/    \:::\  /:::/    /\::/    \:::\  /:::|____|
//  \/____|::|   |           \:::\   \:::\   \/____/  \:::\   \:::\/:::/    /  \/____/ \:::\/:::/    /  \/_____/\:::\/:::/    /
//        |::|   |            \:::\   \:::\    \       \:::\   \::::::/    /            \::::::/    /            \::::::/    /
//        |::|   |             \:::\   \:::\____\       \:::\   \::::/    /              \::::/    /              \::::/    /
//        |::|   |              \:::\   \::/    /        \:::\  /:::/    /               /:::/    /                \::/____/
//        |::|   |               \:::\   \/____/          \:::\/:::/    /               /:::/    /                  ~~
//        |::|   |                \:::\    \               \::::::/    /               /:::/    / ciao omar
//        \::|   |                 \:::\____\               \::::/    /               /:::/    /
//         \:|   |                  \::/    /                \::/____/                \::/    /
//          \|___|                   \/____/                  ~~                       \/____/

export const ElencoProdotti = () => {
	const dispatch = useDispatch();
	const prodotti = useSelector((state) => state.prodotto.listaProdotti);
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(fetchListaProdotti());
	}, []);

	const filteredProdotti = prodotti
		? prodotti.filter((item) =>
				item.prodotto.nomeProdotto
					.toLowerCase()
					.includes(search.toLowerCase())
		  )
		: [];

	return (
		<Container className="mt-3">
			<h1 className="text-center">Lista Prodotti</h1>
			<div>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control
							type="text"
							placeholder="Cerca prodotto"
							onChange={(e) => setSearch(e.target.value)}
						/>
					</Form.Group>
				</Form>
			</div>
			<Row className="g-3">
				{filteredProdotti &&
					filteredProdotti.map((item, index) => (
						<Col
							className="col-12 col-md-6 col-lg-4"
							key={`${index}-prodotto`}>
							<Card className="bg-light bg-opacity-75">
								<Card.Body>
									<Card.Title>
										{item.prodotto.nomeProdotto}
									</Card.Title>
									<div className="d-flex align-items-baseline">
										<Card.Subtitle>Uso:</Card.Subtitle>
										<Card.Text className="ms-2">
											{item.prodotto.descrizioneProdotto}
										</Card.Text>
									</div>

									<div className="d-flex justify-content-end">
										<Link
											className="btn btn-dark me-1"
											to={
												"/Prodotto/Details/" +
												item.prodotto.idProdotto
											}>
											<FontAwesomeIcon
												icon={faInfoCircle}
											/>
										</Link>
										<Link
											className="btn btn-dark"
											to={
												"/Prodotto/Edit/" +
												item.prodotto.idProdotto
											}>
											<FontAwesomeIcon icon={faEdit} />
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
			</Row>
		</Container>
	);
};
