import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: '20px', 
      textAlign: 'center', 
      backgroundColor: '#f0f0f0', 
      marginTop: 'auto' 
    }}>
      <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;