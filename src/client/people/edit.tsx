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
                <Form.Item label="CPF" name="age" initialValue="0">
                    <Input />
                </Form.Item>
                <Form.Item label="Rua" name="color">
                    <Input />
                </Form.Item>
                <Form.Item label="Numero" name="url_image">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="url_image">
                    <Input />
                </Form.Item>
                <Form.Item label="State" name="url_image">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
  };
  