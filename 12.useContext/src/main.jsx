import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, NavLink, Outlet, redirect } from 'react-router-dom'
import './index.css'
import { Home } from './components'
import { Register, Login, Profile } from './pages'
import { authStore } from './utils/authStore'

// layout general
const Layout = () => {
  const hasToken = !!authStore.get() // comprobamos si hay token en el localStorage

  const logout = () => { // cerrar sesión del usuario
    authStore.clear()
    location.href='/'
  }

  return (
    <div>
      <nav style={{backgroundColor:'beige', padding: '20px'}}>
        <strong>API Auth Demo</strong>
        <div>
          <NavLink to='/'>·Inicio·</NavLink>
          <NavLink to='/register'>·Registro·</NavLink>
          { !hasToken ?  
            <NavLink to='/login'>·Login·</NavLink> 
            : <> 
                <NavLink to='/profile'>·Profile·</NavLink> 
                <button onClick={logout}>Logout</button>
              </>
          }
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

// autenticación con redirect -- si no está autenticado, redirige al login
const requireAuth = () => {
  if(!authStore.get()) throw new redirect('/login');
  return null
}

// rutas
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <Profile />, loader: requireAuth } // ruta protegida!!!
    ]
  }
]

// enrutado o router
const router = createBrowserRouter(routes)

// inicio de renderizado de la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
