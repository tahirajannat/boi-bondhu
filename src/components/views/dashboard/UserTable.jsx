import React from 'react';
import Table from '../../common/Table';
const methods = [
    {
        email: 'email',
        description: 'description',
    },
];
const UserTable = () => {
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.Heading>Method</Table.Heading>
                        <Table.Heading>Description</Table.Heading>
                        <Table.Heading>Machine Info</Table.Heading>
                        <Table.Heading className='tcd-text-right'>
                            Action
                        </Table.Heading>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {methods.map((method, index) => (
                        <Table.Row key={method.email}>
                            <Table.Data
                                className='tcd-whitespace-nowrap tcd-font-medium'
                                index={index}
                                itemCount={methods.length}
                            >
                                {method.method}
                            </Table.Data>
                            <Table.Data
                                className='tcd-whitespace-nowrap'
                                index={index}
                                itemCount={methods.length}
                            >
                                {method.description}
                            </Table.Data>

                            <Table.Data
                                index={index}
                                itemCount={methods.length}
                            >
                                <div className='tcd-flex tcd-items-center tcd-justify-end tcd-gap-2 tcd-pr-3'>
                                    <button>
                                        <PencilSquareIcon className='tcd-h-4 tcd-w-4 tcd-text-primary' />
                                    </button>

                                    <button>
                                        <TrashIcon className='tcd-h-4 tcd-w-4 tcd-text-red-500' />
                                    </button>
                                </div>
                            </Table.Data>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default UserTable;
