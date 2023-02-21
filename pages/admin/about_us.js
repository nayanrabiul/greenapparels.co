import React, {useState} from 'react';
import {Form, Row, Col} from "antd";
import {useAction, useFetch} from "../../utils/hooks";
import {post, get} from "../../utils/api_helpers";
import FormInput from "../../utils/form/input";

export const postData = data => post('/page', data)
export const featchData = data => get('/page', data)
const AboutUs = () => {

    const [slides, getSlides] = useFetch(featchData, {page: 'about_us'});
    const [form] = Form.useForm()

    const [modal, setModal] = useState(false);

    const onFinish = async (values) => {

        const payload = {page: 'about_us',content:values.content }
        console.log(payload)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            getSlides()
        })
    }


    return (<div>
        {slides&&
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
        >
            <div className={'p-4 rounded mt-8'}>


                <Row gutter={12}>
                    <Col span={18}><FormInput name={['content', 0, 'heading']} initialValue={slides.content[0].heading} textArea
                                             placeholder={'Main Heading'}/>
                    </Col>
                    <Col span={16}>
                        <FormInput name={['content', 0, 'description']}
                                   textArea
                                   initialValue={slides.content[0].description}
                                   placeholder={'Main description'}
                        />
                    </Col>
                </Row><Row gutter={12}>
                <Col span={8}><FormInput name={['content', 1, 'heading']} textArea initialValue={slides.content[1].heading}
                                         placeholder={'Heading'}/>
                </Col>
                <Col span={16}>
                    <FormInput name={['content', 1, 'description']}
                               textArea
                               initialValue={slides.content[1].description}

                               placeholder={'Description'}
                    />
                </Col>
            </Row><Row gutter={12}>
                <Col span={8}><FormInput name={['content', 2, 'heading']} textArea initialValue={slides.content[2].heading}
                                         placeholder={'Heading'}/>
                </Col>
                <Col span={16}>
                    <FormInput name={['content', 2, 'description']}
                               textArea
                               initialValue={slides.content[2].description}

                               placeholder={'Description'}
                    />
                </Col>
            </Row><Row gutter={12}>
                <Col span={8}><FormInput name={['content', 3, 'heading']} textArea initialValue={slides.content[3].heading}
                                         placeholder={'Heading'}/>
                </Col>
                <Col span={16}>
                    <FormInput name={['content', 3, 'description']}
                               textArea
                               initialValue={slides.content[3].description}

                               placeholder={'Description'}
                    />
                </Col>
            </Row>
                <Row gutter={12}>
                    <Col span={8}><FormInput name={['content', 4, 'heading']} textArea initialValue={slides.content[4].heading}
                                             placeholder={'Heading'}/>
                    </Col>
                    <Col span={16}>
                        <FormInput name={['content', 4, 'description']}
                                   textArea
                                   initialValue={slides.content[4].description}
                                   placeholder={'Description'}
                        />
                    </Col>
                </Row>

                <div className='flex items-center gap-5'>
                    <button className={'p-3 bg-fourth rounded text-second'}>Save</button>

                </div>
            </div>

        </Form>}
    </div>)
        ;


};

export default AboutUs;
