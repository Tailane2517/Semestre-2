import './style.css';

function ListarUsuarios() {
    const [usuarios, setUsuarios] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setLoading(false);
            }

        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    };

    return (
        <div className="listar-usuarios-container">
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.email} <br />
                        {usuario.nome} <br />
                        </li>
                ))}
            </ul>
        </div>
    );
}
          