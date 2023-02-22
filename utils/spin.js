import React from 'react';
import {Button, Col, Modal, Row, Space, Spin} from 'antd';


const Spinner = ({spinModal}) => {

    return (
        <>
            <Modal title={"uploading"} open={spinModal} footer={false}>
                <Row>
                    <Col span={10}>

                    </Col>
                    <Col span={4}>
                        <Spin size="large"/>

                    </Col>
                    <Col span={10}>

                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default Spinner;
