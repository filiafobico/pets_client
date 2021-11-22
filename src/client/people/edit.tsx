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
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password">
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
                <Form.Item label="City" name="address_city">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="address_state">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
  };
  