import Page from "../model/page.model";

export const getPage = async (req, res) => {
    try {
        const {query} = req
        let page = await Page.findOne({page: query?.page})
        if (!!page) {
            return res.status(200).send({
                error: false,
                msg: "Successfully get page",
                data: {
                    ...page["_doc"],
                    content: page.content?.filter(d => (query?.lang === d.lang)).reduce((acc, item) => {
                        acc[item.key] = {
                            type: item.type,
                            value: item.type === "object" ? JSON.parse(item.value) : item.value
                        }
                        return acc
                    }, {})
                },
            })
        }
        return res.status(404).send({
            error: true,
            msg: "Page not found",
        })
    } catch (err) {
        return res.status(500).send({
            error: true,
            msg: "Server failed"
        })
    }
}

export const postPage = async (req, res) => {
    try {
        const {body} = req
        let find = await Page.findOne({page: body?.page})
        if (!!find) {
            if (!!body.title) {
                find.title = body.title
            }
            Object.keys(body.content || {}).forEach(key => {
                let content = find.content.find(content => (content.key === key && content.lang === body.content[key].lang))
                if (!!content) {
                    content.type = body.content[key].type === 'object' ? 'object' : 'string'
                    content.value = body.content[key].type === 'object' ? JSON.stringify(body.content[key].value) : body.content[key].value.toString()
                } else {
                    find.content.push({
                        type: body.content[key].type === 'object' ? 'object' : 'string',
                        key: key,
                        value: body.content[key].type === 'object' ? JSON.stringify(body.content[key].value) : body.content[key].value.toString(),
                        lang: body.content[key].lang
                    })
                }
            })
            await find.save()
            return res.status(200).send({
                error: false,
                msg: "Successfully updated page",
            })
        } else {
            await Page.create({
                page: body?.page,
                title: body?.title,
                content: Object.keys(body.content || {}).map(key => {
                    return {
                        type: body.content[key].type === 'object' ? 'object' : 'string',
                        key: key,
                        value: body.content[key].type === 'object' ? JSON.stringify(body.content[key].value) : body.content[key].value.toString(),
                        lang: body.content[key].lang
                    }
                })
            })
            return res.status(200).send({
                error: false,
                msg: "Successfully created page",
            })
        }
    } catch (err) {
        return res.status(500).send({
            error: true,
            msg: "Server failed"
        })
    }
}