import {
    Show,
    useShow,
    Typography,
  } from "@pankod/refine";

  const { Title, Text } = Typography;

  export const PeopleShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>user</Title>
            <Text>{JSON.parse(localStorage.getItem('user') || '')?.id}</Text>

            <Title level={5}>_id</Title>
            <Text>{record?._id}</Text>

            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>

            <Title level={5}>Email</Title>
            <Text>{record?.email}</Text>

            <Title level={5}>Street</Title>
            <Text>{record?.address_street}</Text>

            <Title level={5}>Number</Title>
            <Text>{record?.address_number}</Text>

            <Title level={5}>City</Title>
            <Text>{record?.address_city}</Text>

            <Title level={5}>State</Title>
            <Text>{record?.address_state}</Text>
        </Show>
    );
  };