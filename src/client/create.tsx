import {
  Create,
  Form,
  Input,
  Radio,
  useForm} from "@pankod/refine";
import { IPet } from 'interfaces/pet';

export const PetCreate = () => {
  const { formProps, saveButtonProps } = useForm<IPet>();

  return (
      <Create saveButtonProps={saveButtonProps}>
          <Form {...formProps} layout="vertical">
              <Form.Item label="Name" name="name">
                  <Input />
              </Form.Item>
              <Form.Item label="Size" name="size">
                <Radio.Group>
                    <Radio value="small">Small</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="big">Big</Radio>
                </Radio.Group>
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
              <Form.Item
                label="Donor"
                name="donor"
                initialValue={JSON.parse(localStorage.getItem('user') || '')?.id}
                hidden={true}
                >
              </Form.Item>
          </Form>
      </Create>
  );
};
