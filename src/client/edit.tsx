import { useForm, Form, Input, Edit, Radio } from "@pankod/refine";
import { IPet } from 'interfaces/pet';

export const PetEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IPet>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
              <Form.Item label="Name" name="name">
                  <Input />
              </Form.Item>
              <Form.Item label="Size" name="size">
                  <Input />
              </Form.Item>
              <Form.Item label="Weight" name="weight">
                  <Input />
              </Form.Item>
              <Form.Item label="Age" name="age">
                  <Input />
              </Form.Item>
              <Form.Item label="Color" name="color">
                  <Input />
              </Form.Item>
              <Form.Item label="Url Image" name="url_image">
                  <Input />
              </Form.Item>
              <Form.Item label="Condition" name="condition">
                    <Radio.Group>
                        <Radio value="adopted">Adopted</Radio>
                        <Radio value="adoption">Adoption</Radio>
                        <Radio value="validation">Validation</Radio>
                    </Radio.Group>
              </Form.Item>
            </Form>
        </Edit>
    );
};