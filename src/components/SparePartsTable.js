import React, { useState } from 'react';
import './styles/SparePartsTable.css';

const SparePartsTable = ({ spareParts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpareParts = spareParts.filter((part) =>
    part.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyClick = (part) => {
    console.log(`Comprando ${part.nombre}`);
  };

  return (
    <div className="spare-parts-table">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar repuesto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table">
        <div className="table-header">
          <div className="header-cell">Nombre</div>
          <div className="header-cell">Marca</div>
          <div className="header-cell">Precio</div>
          <div className="header-cell">Cantidad Disponible</div>
          <div className="header-cell">Cantidad a Comprar</div>
          <div className="header-cell">Acciones</div>
        </div>
        <div className="table-body">
          {filteredSpareParts.map((part) => (
            <div className="table-row" key={part.nombre}>
              <div className="table-cell">{part.nombre}</div>
              <div className="table-cell">{part.marca}</div>
              <div className="table-cell">${part.precio.toFixed(2)}</div>
              <div className="table-cell">{part.cantidadDisponible}</div>
              <div className="table-cell">
                <input
                  type="number"
                  min={0}
                  max={part.cantidadDisponible}
                  defaultValue={0}
                />
              </div>
              <div className="table-cell">
                <button onClick={() => handleBuyClick(part)}>Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SparePartsTable;
