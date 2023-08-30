/* eslint-disable */
import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  Typography,
  TableContainer,
} from '@mui/material';

import { TableVirtuoso } from 'react-virtuoso';

import './styles/styles.css';

const SimpleTable = ({ data }) => {
    const tableTitle = ''
    const height = 2000
    const columns = [
      {
        dataIndex: 'fechaDeSalida',
        title: 'Fecha Salida'
      },
      {
        dataIndex: 'origen',
        title: 'Origen'
      },
      {
        dataIndex: 'destino',
        title: 'Destino'
      },
      {
        dataIndex: 'precio',
        title: 'Precio'
      }
    ]

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer {...props} ref={ref}/>
    )),
    Table: (props) => (
      <Table {...props} stickyHeader />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataIndex}
            style={{
              width: '120px',
              position: 'sticky',
              top: 0,
              background: '#f9f9f9',
              zIndex: 1,
              textAlign: 'center',
              fontSize: 15,
              border: '1px solid',
              borderColor: 'rgba(224, 224, 224, 1)',
              padding: '10px',
              textTransform: 'none',
              minWidth: 'auto',
            }}
          >

            <>
              {column.title}
            </>

          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataIndex}
            style={{
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'rgba(224, 224, 224, 1)',
              padding: '6px',
            }}
          >
            {row[column.dataIndex]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  return (
    <>
      <Typography variant="h4" mb={1.5} padding={'2px'}>
        {tableTitle}
      </Typography>
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
        style={{ height : data.length > 8 ? height : (data.length) * 38 + 120, width: '100%' }}
      />
    </>
  );
};

export default SimpleTable;
