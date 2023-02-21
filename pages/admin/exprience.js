import React, {useState} from 'react';
import {Table, Modal, Form, Row, Col, Button} from "antd";
import axios from "axios";
import {useAction, useFetch} from "../../utils/hooks";
import {post, get} from "../../utils/api_helpers";
import {site_data} from "../../utils/common";
import Image from 'next/image'
import FormInput from "../../utils/form/input";
import ImageInput from "../../utils/form/image";

export const postData = data => post('/page', data)
export const featchData = data => get('/page', data)
const AboutUs = () => {

    const [slides, getSlides] = useFetch(featchData, {page: 'exprience'});
    const [form] = Form.useForm()


    const onFinish = async (values) => {
        const payload = {page: 'exprience', content: values.content}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            getSlides()
        })
    }


    return (<div>
        {slides &&
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <div className={'p-4 rounded mt-8'}>

                    <Row gutter={12}>
                        <Col span={18}><FormInput name={['content', 0, 'heading']}
                                                  initialValue={slides.content[0].heading} textArea
                                                  placeholder={'years of experience without +'}/>
                        </Col>
                        <Col span={16}>
                            <FormInput name={['content', 0, 'description']}
                                       textArea
                                       initialValue={slides.content[0].description}
                                       placeholder={'Main description'}
                            />
                        </Col>
                    </Row>

                    <Row gutter={12}>
                        <Col span={8}><FormInput name={['content', 1, 'heading']} textArea
                                                 initialValue={slides.content[1].heading}
                                                 placeholder={'Heading'}/>
                        </Col>
                        <Col span={4}><FormInput name={['content', 1, 'number']}
                                                 initialValue={slides.content[1].number}
                                                 placeholder={'Number'}/>
                        </Col>
                        <Col span={12}>
                            <FormInput name={['content', 1, 'description']}
                                       textArea
                                       initialValue={slides.content[1].description}

                                       placeholder={'Description'}
                            />
                        </Col>
                    </Row>

                    <Row gutter={12}>
                        <Col span={8}><FormInput name={['content', 2, 'heading']} textArea
                                                 initialValue={slides.content[2].heading}
                                                 placeholder={'Heading'}/>
                        </Col>
                        <Col span={4}><FormInput name={['content', 2, 'number']} number
                                                 initialValue={slides.content[1].number}
                                                 placeholder={'Number'}/>
                        </Col>
                        <Col span={12}>
                            <FormInput name={['content', 2, 'description']}
                                       textArea
                                       initialValue={slides.content[2].description}

                                       placeholder={'Description'}
                            />
                        </Col>
                    </Row><Row gutter={12}>
                    <Col span={8}><FormInput name={['content', 3, 'heading']} textArea
                                             initialValue={slides.content[3].heading}
                                             placeholder={'Heading'}/>
                    </Col>
                    <Col span={4}><FormInput name={['content', 3, 'number']} number
                                             initialValue={slides.content[1].number}
                                             placeholder={'Number'}/>
                    </Col>
                    <Col span={12}>
                        <FormInput name={['content', 3, 'description']}
                                   textArea
                                   initialValue={slides.content[3].description}

                                   placeholder={'Description'}
                        />
                    </Col>
                </Row>
                    <Row gutter={12}>
                        <Col span={8}><FormInput name={['content', 4, 'heading']} textArea
                                                 initialValue={slides.content[4].heading}
                                                 placeholder={'Heading'}/>
                        </Col>
                        <Col span={4}><FormInput name={['content', 4, 'number']} number
                                                 initialValue={slides.content[1].number}
                                                 placeholder={'Number'}/>
                        </Col>
                        <Col span={12}>
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
