import {Form, InputNumber} from "antd";


const NumberInput = (props) => {
    let max = props.max || 1
    let min = props.min || 1
    let defaultValue = props.defaultValue || 5
    let name = props.name || 'img'
    return (
        <Form.Item name={name}>
            < Input min={min} max={max} defaultValue={defaultValue}/>
        </Form.Item>
    )
}

const Input = ({value, onChange, min, max, defaultValue}) => {
    return (
        <InputNumber min={min} max={max} defaultValue={defaultValue} onChange={onChange}/>
    )
}

export default NumberInput;