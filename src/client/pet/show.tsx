import {
  Show,
  useShow,
  Typography,
  Tag,
} from "@pankod/refine";

const { Title, Text } = Typography;

export const PetShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
          <Title level={5}>user</Title>
          <Text>{JSON.parse(localStorage.getItem('user') || '')?.id}</Text>

          <Title level={5}>Name</Title>
          <Text>{record?.name}</Text>

          <Title level={5}>Size</Title>
          <Text>
              <Tag>{record?.size}</Tag>
          </Text>

          <Title level={5}>Weight</Title>
          <Text>{record?.weight}</Text>

          <Title level={5}>Age</Title>
          <Text>{record?.age}</Text>

          <Title level={5}>Condition</Title>
          <Text>
              <Tag>{record?.condition}</Tag>
          </Text>
      </Show>
  );
};