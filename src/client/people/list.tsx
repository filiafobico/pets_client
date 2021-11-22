import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IPeople } from 'interfaces/people';

export const PeopleList: React.FC = () => {
  const { tableProps } = useTable<IPeople>();

  return (
      <List>
          <Table<IPeople> {...tableProps} rowKey="id">
              <Table.Column dataIndex="name" title="name" />
              <Table.Column dataIndex="email" title="email" />
              <Table.Column dataIndex="Street" title="address_street" />
              <Table.Column dataIndex="Number" title="address_number" />
              <Table.Column dataIndex="City" title="address_city" />
              <Table.Column dataIndex="State" title="address_state" />
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