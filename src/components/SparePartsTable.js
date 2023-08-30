import React, { useState } from 'react';
import './styles/SparePartsTable.css';

const SparePartsTable = ({ spareParts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [forceReDender, setForceReDender] = useState(1);

  
  const filteredSpareParts = spareParts.filter((part) =>
    part.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyClick = async (part) => {
    console.log(`Comprando ${part.nombre}`);

    const requestBody = {
        itemComprado: part.nombre,
        usuario: 1,
        cantidadDeUnidades: 1,
        totalCompra: part.precio,
        fechaCompra: '2023-08-30'
    };
    
    const url = process.env.REACT_APP_BACKEND_API_LINK + '/compra';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    };
    
    const makeCompra = async () => {
      try {
        const response = await fetch(url, options);
        const statusCode = response.status;
        return statusCode
      }
      catch (error) {
        console.error('API request error:', error);
      }
    };
    const status = await makeCompra();
    console.log(status)

    if (status === 201) {
      console.log('Parte comprada!')
      part['comprado'] = true
      setForceReDender(forceReDender+1)
      console.log(part)

    }
    return 
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
                  min={1}
                  max={part.cantidadDisponible}
                  defaultValue={1}
                />
              </div>

              {!part['comprado'] && 
                <div className="table-cell">
                  <button onClick={() => handleBuyClick(part)}>Comprar</button>
                </div>
              }
              {part['comprado'] && 
                <div className="table-cell">
                  COMPRADO! :D
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SparePartsTable;
