import React from 'react';
import {Button, Modal, Space, Spin} from 'antd';


const Spinner = ({spinModal}) => {

    return (
        <>
            <Modal open={spinModal} footer={false}>\
                <div className={'flex justify-cent items-center'}>
                    <Spin size="large"/>
                </div>
            </Modal>
        </>
    );
};

export default Spinner;
