import React, { useState, useEffect } from 'react';
import './styles/SparePartsModule.css'; // Asegúrate de importar los estilos
import SparePartsTable from './SparePartsTable';
import spareParts from '../data/SpareParts.json'

function SparePartsModule() {
  return (
    <div>
      <section className="spare-parts-module">
        <h2>Módulo de Compra de Repuestos</h2>
        <SparePartsTable spareParts={spareParts} />
      </section>
    </div>
  );
}

export default SparePartsModule;
