import { useEffect, useState } from "react"
import { AuthService } from '../../services/auth.service'
import { authStore } from '../../utils/authStore'

export const Profile = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const token = authStore.get() // cojo el token del localStorage
        if(!token){ setError('No hay token de autenticación'); return } // si no hay token, lanzo error al usuario
        // llamo a la API a la ruta /profile
        AuthService.profile(token)
        .then(setUser)
        .catch(err => setError(err.message))
    }, [])

    return (
        <section className="card">
            <h2>PERFIL DEL USUARIO</h2>

            {error && <div className="error">{error}</div>}

            {!error && !user && <p className="muted">Cargando...</p>}

            {user && (
                <ul>
                {Object.entries(user)
                    .filter(([k]) => k !== 'password')
                    .map(([k,v]) => <li key={k}><strong>{k}:</strong> {String(v)}</li>)
                }
                </ul>
            )}
        </section>
    )
}
