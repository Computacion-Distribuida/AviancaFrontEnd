import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha Salida</th>
          <th>Origen</th>
          <th>Destino</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.fechaSalida}</td>
            <td>{item.origen}</td>
            <td>{item.destino}</td>
            <td>{item.precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;