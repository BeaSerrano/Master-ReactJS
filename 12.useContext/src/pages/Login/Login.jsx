import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthService } from "../../services/auth.service"
import { authStore } from "../../utils/authStore"
import { storage } from "../../utils/storage"

export const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email:'', password:'' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [ok, setOk] = useState(null)

    // Gestión de los inputs del formulario
    const onChange = (e) => setForm((prev) => ({...prev, [e.target.name]: e.target.value}))

    // función que envía el formulario
    const onSubmit = async (e) => {
        e.preventDefault() // evita la recarga después del submit
        setError(null) // limpiamos los mensajes de error y de ok
        setOk(null)

        setLoading(true) // empieza la llamada a la API

        try {
            // llamamos a la función login de la API
            const data = await AuthService.login({ 
                email: form.email.trim().toLowerCase(), 
                password: form.password 
            })
            // comprobamos si hay token generado
            const token = data.token ?? data?.data?.token;
            // comprobar si hay un usuario
            const user  = data.user ?? data?.data?.user ?? data?.data;
            // gestiono el error si no hay toke generado
            if(!token) throw new Error('El backend no devolvió token')
            // si hay token, lo guardo en el localStorage
            authStore.set(token)
            // además, guardo el user con su clave user en el localStorage
            storage.set('user', user ?? null)
            // una vez terminado el login, llevo al usuario hasta la ruta /profile
            navigate('/profile')
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión 💀')
        } finally {
            setLoading(false) // termina el proceso de llamada a la API
        }
    }

    return (
        <section className="card">
            <h2>INICIAR SESIÓN</h2>
            <form className="space-y" onSubmit={onSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input name="email" value={form.email} onChange={onChange} />
                </div>
                <div className="field">
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={onChange} />
                </div>

                {error && <div className="error">{error}</div>}

                <div className="row" style={{justifyContent:'flex-end'}}>
                    <button className="btn" disabled={loading}>{loading ? 'Iniciando sesión...':'Iniciar sesión'}</button>
                </div>
            </form>
        </section>
    )
}