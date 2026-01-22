function App(){
  return (
    <div>
      <h1>5A EVND</h1>
      <h2>Profesor:</h2>
      <h3>M.T.I Ricardo Luna Santos</h3>
      <UserComponent />
      <ProfileConponent />
      <FeedComponent />
    </div>
  )
}

function UserComponent(){
  const nombre = 'Ricardo';
  const apellidos = 'Luna Santos';
  const nombrecompleto = <h3>El nombre es: {nombre} y sus apellidos son: {apellidos}</h3>;
  return <h2>User Component {nombrecompleto}</h2>;
}
function ProfileConponent(){
  const users = [
    { id: 1, name:'Diego', role: 'Web Developer'},
    { id: 2, name:'Andrea', role: 'Web Designer'},
    { id: 3, name:'Paola', role: 'Team Leader'},
  ]
  return (
    <>
      <p>Lista de usuarios del sistema</p>
      <ul>
        {
        users.map(function(user,index){
          return (
            <li key={index}>{user.name} es un {user.role}</li>
          )
        })
        }
      </ul>
    </>
  )
}
function FeedComponent(){
  const materiales = [
    { id: 1, name:'Cemnto'},
    { id: 2, name:'Block'},
    { id: 3, name:'Arena'},
  ]
  return (
    <>
      <p>Lista de materiales</p>
      <ul>
        {
        materiales.map(function(material,index){
          return (
            <li key={index}>{material.name}</li>
          )
        })
        }
      </ul>
    </>
  )
}

export default App
