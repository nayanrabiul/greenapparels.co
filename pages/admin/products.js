import React, {useState} from 'react';
import {Table, Modal, Form, Row, Col, Button} from "antd";
import axios from "axios";
import {useAction, useFetch} from "../../utils/hooks";
import {post, get} from "../../utils/api_helpers";
import {site_data} from "../../utils/common";
import Image from 'next/image'
import FormInput from "../../utils/form/input";
import ImageInput from "../../utils/form/image";
import Spinner from "../../utils/spin";

export const postData = data => post('/page', data)
export const featchData = data => get('/page', data)
const MainSlide = () => {

    const [slides, getSlides] = useFetch(featchData, {page: 'products'});
    const [form] = Form.useForm()
    const [images, setImages] = useState(null);
    const [modal, setModal] = useState(false);
    const [spinModal, setSpinModal] = useState(false);



    const onFinish = async (values) => {
        setSpinModal(true);
        const data = new FormData()
        data.append('file', values.image)
        let url = site_data.backend_url + `/api/pagefile`;
        const res = await axios.post(url, data, {})
        values.image = res.data.data;

        const payload = {page:'products',content:[...slides.content,values]}

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            setModal(false)
            form.resetFields();
            getSlides()
            setSpinModal(false);
        })
    }

    const deleteHandle = async (i) => {


        const thisArray = slides.content.filter((value, index)=> {
            return index !== i;
        });
        console.log(thisArray)

        const payload = {page:'products',content:thisArray}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useAction(postData, payload, () => {
            console.log('success')
            getSlides()
        })
    }

    return (<div>
            <Spinner spinModal={spinModal}/>
            <Row gutter={8} className={'p-4'}>
                <Col span={21}></Col>
                <Col span={3} className={'flex justify-center items-center'}>
                    <div className={'p-2 bg-green-700 rounded text-second shadow-xl'}
                         onClick={() => setModal(true)}> Add Slide
                    </div>
                </Col>
            </Row>

            <Row gutter={8}>
                <Col span={5} className={'font-bold text-lg'}>Heading</Col>
                <Col span={5} className={'font-bold text-lg'}>Descriptions</Col>
                <Col span={5} className={'font-bold text-lg'}>Hover Descriptions</Col>
                <Col span={6} className={'font-bold text-lg'}>Image</Col>
                <Col span={3} className={'font-bold text-lg'}>Actions</Col>
            </Row>
            {slides?.content.map((s, i) => (
                <Row gutter={8} className={'p-4'} key={i}>
                    <Col span={5}>{s.heading}</Col>
                    <Col span={5}>{s.description}</Col>
                    <Col span={5}>{s.h_description}</Col>
                    <Col span={6}>{
                        <Image src={s.image} alt={'fd'} height={300} width={300}/>
                    }</Col>
                    <Col span={3} className={'flex justify-center items-center'}>
                        <div className={'p-2 bg-red-700 rounded shadow-xl hover-pointer'} onClick={()=>deleteHandle(i)}> Delete</div>
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
                        <Col span={12}>
                            <FormInput name={['heading']} textArea
                                       placeholder={'Heading'}/>
                        </Col>
                        <Col span={12}>
                            <FormInput name={['description']}
                                       textArea
                                       placeholder={'Description'}
                            />
                        </Col>
                        <Col span={24}>
                            <FormInput name={['h_description']}
                                       textArea
                                       placeholder={'Hover Description'}
                            />
                        </Col>

                        <Col span={8}>
                            <div className={'flex'}>
                                <Form.Item name={'image'} label={"Slider image"}>
                                    <ImageInput onSelect={(url) => {
                                        setImages(url)
                                    }}/>
                                </Form.Item>
                            </div>
                        </Col>
                        <Col span={16}>
                            <img className="h-28 pb-4"
                                 src={images}
                                 alt=""/>
                        </Col>

                    </Row>

                    <button className={'hover-pointer px-4 py-2 rounded shadow-xl bg-second text-third'}>
                        Save
                    </button>
                </Form>


            </Modal>
        </div>
    )

};

export default MainSlide;
