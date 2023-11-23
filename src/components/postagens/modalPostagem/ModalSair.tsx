import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { AuthContext } from "../../../contexts/AuthContext";

function ModalSair() {

    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext)

    function sair(){
        navigate('/postagens');
    }

    useEffect(() => {

        if (usuario !== undefined) {
            sair()
        }
    }, [usuario])

  return (
    <div>ModalSair</div>
  )
}

export default ModalSair