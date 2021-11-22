import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IPeople } from 'interfaces/people';

export const PeopleList: React.FC = () => {
  const { tableProps } = useTable<IPeople>();

  return (
      <List>
          <Table<IPeople> {...tableProps} rowKey="id">
              <Table.Column dataIndex="name" title="Name" />
              <Table.Column dataIndex="email" title="Email" />
              <Table.Column dataIndex="address_street" title="Street" />
              <Table.Column dataIndex="address_number" title="Number" />
              <Table.Column dataIndex="address_city" title="City" />
              <Table.Column dataIndex="address_state" title="State" />
              <Table.Column<IPeople>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                            </Space>
                        );
                    }}
                />
          </Table>
      </List>
  );
};