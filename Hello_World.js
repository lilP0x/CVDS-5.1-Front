import React, { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // URL del servicio Spring Boot
    const apiUrl = 'http://localhost:8080/clients';  // Reemplaza con la URL real de tu servicio

    // Realizar la solicitud GET utilizando fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => {
        // Manejar los datos recibidos del servicio Spring Boot
        setData(result);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }, []);  // El segundo argumento [] significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div>
      <h1>Hello World</h1>
      {data && (
        <div>
          <h2>Respuesta del servicio Spring Boot:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HelloWorld;
