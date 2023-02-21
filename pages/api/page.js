// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Page from "./model/page";
import db from "./controllers/db";

export default async function handler(req, res) {
    await db.connect()

    if (req.method === 'GET') {
        if (req.query.page === 'all') {
            try {
                let find = await Page.find()
                return res.status(200).send({
                    error: false,
                    msg: "Successfully Updated",
                    data: find
                })
            } catch (err) {
                return res.status(400).send({
                    error: true,
                    msg: "error",
                })
            }
        } else {
            try {
                let find = await Page.where(req.query)
                if (find.length === 0) {
                    await Page.create({
                        page: req.query.page,
                        content: [],
                    })
                    await find.update()
                }

                return res.status(200).send({
                    error: false,
                    msg: "Successfully Updated",
                    data: find[0]
                })
            } catch (err) {
                return res.status(400).send({
                    error: true,
                    msg: "error",
                })
            }
        }

    }
    if (req.method === 'POST') {

        try {
            const {body} = req
            let find = await Page.findOne({page: body?.page})
            if (!!find) {
                find.content = body.content
                await find.save()
                return res.status(200).send({
                    error: false,
                    msg: "Successfully Updated",
                })
            } else {
                await Page.create({
                    page: body?.page,
                    content: body.content,
                })
                return res.status(200).send({
                    error: false,
                    msg: "Page successfully created",
                })
            }
        } catch (err) {
            console.log(err)
            return res.status(500).send({
                error: true,
                msg: "Server failed"
            })
        }

    }
}
