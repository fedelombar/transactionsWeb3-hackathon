/*eslint-disable*/
import React, { useState } from 'react'
import { Modal } from '../../ui/components/styles/Modal.styled'
import { OverlayModal } from '../../ui/components/styles/OverlayModal.styled'
import CreateContact from './CreateContact'


const ModalContact = ({ onClose, handleSubmit}) => {

    return (
        <>
            <Modal>
                <h2 className='modal-title'>Add Contact</h2>
                <CreateContact />
            </Modal>
            <OverlayModal onClick={onClose}/>
        </>

    )
}

export default ModalContact