import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre WebWorking:</h1>
        <Testimonio
          nombre='Alberto Michael'
          pais='India'
          imagen='alberto'
          cargo='Ingeniero de Software'
          empresa='TechGame'
          testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.' />

        <Testimonio
          nombre='Enrique Nieto'
          pais='Mexico'
          imagen='juan'
          cargo='Ingeniero de Software'
          empresa='Softtek'
          testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.' />

        <Testimonio
          nombre='Freddy Benson'
          pais='Estados Unidos'
          imagen='luis'
          cargo='Ingeniero de TI'
          empresa='Coca Cola'
          testimonio='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.' />
      </div>
    </div>
  );
}

export default App;
