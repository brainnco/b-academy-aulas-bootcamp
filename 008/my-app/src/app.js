const menu = [
  {
    id: 'home',
    name: 'Home',
    link: '/',
  },
  {
    id: 'home-mobile',
    name: 'Home',
    link: '/mobile-home',
  },
  {
    id: 'sobre',
    name: 'Sobre',
    link: '/sobre'
  }
]

function App () {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default App
