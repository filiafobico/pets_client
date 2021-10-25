import {
  Create,
  Form,
  Input,
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
                  <Input />
              </Form.Item>
              <Form.Item label="Donor" name="donor">
                  <Input
                    defaultValue={JSON.parse(localStorage.getItem('user') || '')?.id}
                  />
              </Form.Item>
          </Form>
      </Create>
  );
};
