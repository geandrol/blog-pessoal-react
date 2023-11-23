import Popup from 'reactjs-popup';
import DeletarPostagem from '../deletarPostagem/DeletarPostagem';




interface ModalDeleteProps {
  id: number
}

function ModalDelete({id}: ModalDeleteProps) {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
          Nova postagem
        </button>
      }
      modal
    >
      <div>
        <DeletarPostagem id={id} />
      </div>
    </Popup>
  );
}

export default ModalDelete;