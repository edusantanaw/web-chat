import {Request, Response} from 'express'

type httpReponse = {
    statusCode: number 
    body: unknown
}
type controller = (data: any) => Promise<httpReponse>

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