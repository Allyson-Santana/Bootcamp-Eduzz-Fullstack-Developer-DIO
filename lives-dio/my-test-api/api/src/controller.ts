import { Request, Response } from 'express';

const ping = (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).json({
        message: 'pong',
        data: {...req.body}
    });
}

export {
    ping
}