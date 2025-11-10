"use client"
import { Modal } from "@mui/joy"
import LevelForm from "./LevelForm"

export default function NewModal({ showNewModal, handleCloseNewModal, updateData }) {
    return (
        <div>
            <Modal
                open={showNewModal}
                onClose={handleCloseNewModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <LevelForm
                    showModal={showNewModal}
                    closeModal={handleCloseNewModal}
                    updateData={updateData}
                />
            </Modal>
        </div>
    )
}
