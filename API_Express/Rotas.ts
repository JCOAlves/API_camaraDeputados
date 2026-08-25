import express, { type Request, type Response } from 'express';
import listaProdutos, { type Produto } from './Produtos.ts';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.status(200).json(listaProdutos);
});

router.get("/:ID", (req: Request, res: Response) => {
	const { ID } = req.params;

	const produtoEncontrado: Produto | undefined | null = listaProdutos.find(p => p.ID === Number(ID));

	if(produtoEncontrado){
		res.status(200).json(produtoEncontrado);

	} else{
		res.status(404).send("Produto não encontrado");
	};

	
});

export default router;
