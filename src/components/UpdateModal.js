"use client"
import { Modal } from "@mui/joy"
import LevelForm from "./LevelForm"

export default function UpdateModal({ levelObject, showUpdateModal, handleCloseNewModal, updateData }) {
    return (
        <div>
            <Modal
                open={showUpdateModal}
                onClose={handleCloseNewModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <LevelForm
                    levelObject={levelObject}
                    showModal={showUpdateModal}
                    closeModal={handleCloseNewModal}
                    updateData={updateData}
                />
            </Modal>
        </div>
    )
}
