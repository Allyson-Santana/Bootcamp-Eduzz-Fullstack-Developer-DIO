import { URLModel } from "database/model/URL";
import { Request, Response } from "express";
import ShortId from 'shortid';
import { Config }  from '../config/constants';

export class URLController 
{

    public async shorten(req: Request, res: Response): Promise<void>
    {
        const {originURL} = req.body; // pega a url

        const url = await URLModel.findOne({ originURL });
        if (url) {
			res.json(url)
			return
		}

        const hash = ShortId.generate(); // gera um hash 

        const shortURL = `${Config.API_URL}/${hash}`; // criar a url com o hash

        const newURL = await URLModel.create({ hash, shortURL, originURL })
		res.json(newURL)// envia a resposta
    }

    public async redirect(req: Request, res: Response): Promise<void>
    {
        const { hash } = req.params
		const url = await URLModel.findOne({ hash })

		if (url) {
			res.redirect(url.originURL)
			return
		}

		res.status(400).json({ error: 'URL not found' })
    }

}