import {Request, Response} from 'express'

type controller = (data: any) => Promise<{statusCode: number, body: unknown}>

export default function adapter(controller: controller){
    return  async (req: Request, res: Response) =>{
        const response =  await controller({
            ...req.body,
            ...req.params,
            ...req.query,
        })
        res.status(response.statusCode).json(response.body)
    }
}