import { useTable, List, Table, EditButton, ShowButton, Space, DeleteButton } from '@pankod/refine';
import { IPet } from 'interfaces/pet';

export const PetList: React.FC = () => {
  const { tableProps } = useTable<IPet>();

  return (
      <List>
          <Table<IPet> {...tableProps} rowKey="id">
              <Table.Column dataIndex="name" title="name" />
              <Table.Column dataIndex="size" title="size" />
              <Table.Column dataIndex="weight" title="weight" />
              <Table.Column dataIndex="age" title="age" />
              <Table.Column dataIndex="condition" title="condition" />
              <Table.Column<IPet>
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