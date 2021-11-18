import {
    Edit,
    Form,
    Input,
    useForm} from "@pankod/refine";
  import { IPeople } from 'interfaces/people';
  
  export const PeopleEdit = () => {
    const { formProps, saveButtonProps } = useForm<IPeople>();
  
    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="weight" initialValue="0">
                    <Input />
                </Form.Item>
                <Form.Item label="CPF" name="cpf">
                    <Input />
                </Form.Item>
                <Form.Item label="Street" name="address_street">
                    <Input />
                </Form.Item>
                <Form.Item label="Number" name="address_number">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="state">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
  };
  