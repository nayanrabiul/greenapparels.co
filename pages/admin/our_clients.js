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
const OurClients = () => {

    const [slides, getSlides] = useFetch(featchData, {page: 'our_clients'});
    const [form] = Form.useForm()
    const [images, setImages] = useState(null);
    const [modal, setModal] = useState(false);

    const onFinish = async (values) => {

        const data = new FormData()
        data.append('file', values.image)
        let url = site_data.backend_url + `/api/pagefile`;
        const res = await axios.post(url, data, {})
        values.image = res.data.data;

        const payload = {page: 'our_clients', content: [...slides.content, values]}

        console.log(payload)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            setModal(false)
            form.resetFields();
            getSlides()
        })
    }

    const deleteHandle = async (i) => {


        const thisArray = slides.content.filter((value, index) => {
            return index !== i;
        });
        console.log(thisArray)


        const payload = {page: 'our_clients', content: thisArray}

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            getSlides()
        })
    }

    return (<div>
            {console.log(slides)}
            <Row gutter={8} className={'p-4'}>
                <Col span={21}></Col>
                <Col span={3} className={'flex justify-center items-center'}>
                    <div className={'p-2 bg-green-700 rounded text-second shadow-xl'}
                         onClick={() => setModal(true)}> Add Slide
                    </div>
                </Col>
            </Row>

            <Row gutter={8}>
                <Col span={21} className={'font-bold text-lg'}>Image</Col>


                <Col span={3} className={'font-bold text-lg'}>Actions</Col>
            </Row>
            {slides?.content.map((s, i) => (
                <Row gutter={8} className={'p-4'} key={i}>

                    <Col span={15}>{
                        <Image src={s.image} alt={'fd'} height={300} width={300}/>
                    }</Col>
                    <Col span={6}></Col>
                    <Col span={3} className={'flex justify-center items-center'}>
                        <div className={'p-2 bg-red-700 rounded shadow-xl'} onClick={() => deleteHandle(i)}> Delete
                        </div>
                    </Col>
                </Row>
            ))}

            <Modal open={modal} width={999} onCancel={()=>setModal(false)} footer={null}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                >

                    <Row gutter={12}>
                        <Form.Item name={'image'} label={"Slider image"}>
                            <ImageInput onSelect={(url) => {
                                setImages(url)
                            }}/>
                        </Form.Item>

                        <Col span={6}>
                            <img className="h-28 pb-4"
                                 src={images}
                                 alt=""/>
                        </Col>
                    </Row>
                    <button className={'px-4 py-2 rounded shadow-xl bg-second text-third'}>
                        Save
                    </button>
                </Form>


            </Modal>
        </div>
    )

};

export default OurClients;
