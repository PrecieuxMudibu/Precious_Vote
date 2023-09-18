// import styles from '../../styles/layouts/modal_layout.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: "80vh",
    bgcolor: '#FFFBEC',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

export default function Modal_Layout({ children, close_modal, open }) {
    return (
        <>
            <Modal
                open={open}
                onClose={close_modal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </>
    );
}
