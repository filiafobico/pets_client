import {
    Create,
    Form,
    Input,
    useForm} from "@pankod/refine";
  import { IPeople } from 'interfaces/people';
  
  export const PeopleCreate = () => {
    const { formProps, saveButtonProps } = useForm<IPeople>();
  
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" initialValue="0">
                    <Input />
                </Form.Item>
                <Form.Item label="CPF" name="cpf">
                    <Input />
                </Form.Item>
                <Form.Item label="Rua" name="address_street">
                    <Input />
                </Form.Item>
                <Form.Item label="Numero" name="address_number">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="address_city">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="address_state">
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
  };
  