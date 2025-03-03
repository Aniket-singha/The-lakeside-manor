import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";


function AddCabin(){
    return (
    <Modal>
        <Modal.Open opens='cabin-form'>
            <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
            <CreateCabinForm/>
        </Modal.Window>
{/* 
        <Modal.Open opens='table'>
            <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window opens='table'>
            <CabinTable/>
        </Modal.Window> */}
    </Modal>
    )
}

// function AddCabin() {
//   const [isOpenModal,setisOpenModal]=useState(false);

//     return (
//         <div>
//                 <Button onClick={()=>setisOpenModal(show=>!show)}>Add new cabin</Button>
//                 {isOpenModal && <Modal onClose={()=>setisOpenModal(false)}>
//                     <CreateCabinForm onCloseModal={()=>setisOpenModal(false)}/>
//                 </Modal> }

//         </div>
//     )
// }

export default AddCabin
