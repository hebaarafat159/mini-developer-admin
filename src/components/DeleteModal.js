"use client"
import { Button, Modal, ModalDialog, DialogTitle, DialogActions, DialogContent, Divider } from "@mui/joy"
import { WarningRounded } from "@mui/icons-material"

export default function DeleteModal({ showDeleteModal, handleCloseDeleteModal, updateData }) {

    return (
        <div>
            <Modal
                open={showDeleteModal}
                onClose={handleCloseDeleteModal}
                className="flex justify-center items-center"
            >
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRounded />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete this level?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" onClick={updateData}>
                            Delete Level
                        </Button>
                        <Button variant="plain" color="neutral" onClick={handleCloseDeleteModal}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        </div>
    )
}
