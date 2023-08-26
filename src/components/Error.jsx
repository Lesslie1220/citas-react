/*const Error = () => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold
          mb-3 rounded-md'>
          <p>Todos los campos son Obligatorios...</p>
          </div>
  )
}*/
//otra forma de mandar una alerta o mensaje entre componentes
const Error = ({mensaje}) => {
    return (
      <div className='bg-red-800 text-white text-center p-3 uppercase font-bold
            mb-3 rounded-md'>
            <p>{mensaje}</p>
            </div>
    )
  }

export default Error
