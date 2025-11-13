import { useEffect, useState } from "react"
import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Accordion, AccordionGroup, AccordionDetails, AccordionSummary } from "@mui/joy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import NewModal from "./NewModal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

export default function LevelList({ list, updateList }) {
    const [showNewModal, setShowNewModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const [changeLevel, setChangeLevel] = useState(null)

    const [levels, setLevels] = useState([]);

    useEffect(() => {
        setLevels(() => [...list])
    }, [list]);

    /* Add new level dialge control */
    // show Add new dialog 
    function handleNewModal() {
        setShowNewModal(true)
    }

    // close | hide add new dialog
    function handleCloseNewModal() {
        setShowNewModal(false)
    }

    function handleNew(newLevel) {
        setLevels((prevLevels) => {
            // Add new level
            return [...prevLevels, newLevel];
        });
        // alert(JSON.stringify(levels))
        updateList(levels)
        // setChange(newCollection)
    }

    /* Add update level dialge control */
    // show update dialog 
    function handleUpdateModal(level) {
        setChangeLevel(level)
        setShowUpdateModal(true)
    }
    // close | hide update new dialog
    function handleCloseUpdateModal() {
        setShowUpdateModal(false)
    }

    function handleUpdate(updatedLevel) {
        setLevels((prevLevels) =>
            prevLevels.map((lvl) =>
                lvl === changeLevel ? updatedLevel : lvl
            )
        )
        updateList(levels)
    }

    /* Add delete level dialge control */
    // show delete dialog 
    function handleDeleteModal(level) {
        setChangeLevel(level)
        setShowDeleteModal(true)
    }
    // close | hide add delete dialog
    function handleCloseDeleteModal() {
        setShowDeleteModal(false)
    }

    function handleDelete() {
        setLevels((prevLevels) =>
            prevLevels.filter((lvl) => lvl !== changeLevel)
        );
        handleCloseDeleteModal(false)
        updateList(levels)
    }

    return (
        <>

            {/* Outcomes */}
            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1.5vmin",
                }}>

                <Grid item xs={8}>
                    <Typography
                        component="p"
                        sx={{ color: "#333440", fontWeight: "bold" }}>
                        Levels
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton color="primary" onClick={() => handleNewModal()}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Levels  */}
            <Grid item xs={12} md={12}>

                <AccordionGroup>
                    {levels ? levels.map((level, index) => (
                        <Accordion key={index}>
                            <AccordionSummary>
                                <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bold', alignItems: 'flex-start' }}> {level.title} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <Button variant="soft" onClick={() => handleUpdateModal(level)}>Edit Level</Button>
                                    <Button variant="outlined" onClick={() => handleDeleteModal(level)}>Delete Level</Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )) : null}
                </AccordionGroup>

            </Grid>


            {/* show Add new level dialoge */}
            <NewModal
                showNewModal={showNewModal}
                handleCloseNewModal={handleCloseNewModal}
                updateData={handleNew}
            />

            {/* show Add new level dialoge */}
            <UpdateModal
                levelObject={changeLevel}
                showUpdateModal={showUpdateModal}
                handleCloseNewModal={handleCloseUpdateModal}
                updateData={handleUpdate}
            />

            {/* show Delete level dialoge */}
            <DeleteModal
                showDeleteModal={showDeleteModal}
                handleCloseDeleteModal={handleCloseDeleteModal}
                updateData={handleDelete}
            />
        </>
    )
}