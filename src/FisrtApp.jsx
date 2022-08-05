
const getResult = (a,b) => a + b;

export const FisrtApp = () => {
    const newmessage = {
        message: 'Hola mundo',
        title:'alejandra'
    };
return (
    <>
        <h1>{getResult(5, 9)}</h1>
        {/*<code>{ JSON.stringify(newmessage) }</code>*/}
        <p>Soy un subtitulo</p>
    </>
  )}
