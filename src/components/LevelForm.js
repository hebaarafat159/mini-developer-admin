import { useEffect, useState } from "react";
import { Card, TextField, Typography, Grid, Button, IconButton } from "@mui/material";
import { Modal } from "@mui/joy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function LevelForm({ levelObject, showModal, closeModal, updateData, }) {
    const [level, setLevel] = useState({
        _id: "",
        title: "",
        age: 0,
        language: "",
        session_duration: 0,
        course_duration: 0,
        price: 0.0,
        ranking: 0, // Indicates course priority — 1 is the first to view
        outcomes: [],
    });

    // If updating level, set initial values
    useEffect(() => {
        if (levelObject) {
            setLevel({
                _id: levelObject._id || "",
                title: levelObject.title || "",
                age: levelObject.age || 0,
                language: levelObject.language || "",
                session_duration: levelObject.session_duration || 0,
                course_duration: levelObject.course_duration || 0,
                price: levelObject.price || 0.0,
                outcomes: levelObject.outcomes || [],
            });
        }
    }, [levelObject]);

    // Update each form textfield using its name and value
    function handleChange(e) {
        const { name, value } = e.target;
        setLevel((prevLevel) => ({ ...prevLevel, [name]: value }));
    }

    // Create new level
    async function handleNew(e) {
        e.preventDefault();
        updateData(level);
        closeModal();
    }

    // Update existing level
    async function handleUpdate(e) {
        e.preventDefault();
        updateData(level);
        closeModal();
    }

    const isEditing = Boolean(level.title);

    return (
        <Modal
            open={showModal}
            onClose={closeModal}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.2vmin",
            }}
        >
            <Card
                sx={{
                    justifyContent: "space-evenly",
                    padding: "1.5vmin",
                    alignContent: "center",
                    width: { xs: "90%", md: "60%" },
                }}
            >
                <Typography
                    component="h5"
                    variant="h5"
                    sx={{
                        color: "#ed7d45",
                        fontWeight: "bolder",
                        textAlign: "center",
                        fontFamily: "Papyrus",
                        mb: 2,
                    }}
                >
                    {isEditing ? "Edit Level" : "Add New Level"}
                </Typography>

                <form onSubmit={isEditing ? handleUpdate : handleNew}>
                    {/* Course Title */}
                    <Typography
                        component="p"
                        sx={{ color: "#333440", fontWeight: "bold", mb: 1 }}
                    >
                        Title <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                name="title"
                                label="Title"
                                value={level.title}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    {/* Course Details */}
                    <Typography
                        component="p"
                        sx={{ color: "#333440", fontWeight: "bold", mt: 2, mb: 1 }}
                    >
                        Course Details <span style={{ color: "red" }}>*</span>
                    </Typography>

                    <Grid container spacing={1}>
                        {/* Language */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Language"
                                name="language"
                                value={level.language}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* Course Duration */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Course Duration"
                                type="number"
                                name="course_duration"
                                value={level.course_duration}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* Session Duration */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Session Duration"
                                type="number"
                                name="session_duration"
                                value={level.session_duration}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* Age */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Minimum Age"
                                type="number"
                                name="age"
                                value={level.age}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* Price */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Price"
                                type="number"
                                name="price"
                                value={level.price}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>

                        {/* priority */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Ranking"
                                type="number"
                                name="ranking"
                                value={level.ranking}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    {/* Outcomes */}
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "1.5vmin",
                        }}
                    >
                        <Grid item xs={8}>
                            <Typography
                                component="p"
                                sx={{ color: "#333440", fontWeight: "bold" }}
                            >
                                Outcomes
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <IconButton color="primary">
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "15px",
                        }}
                    >
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Card>
        </Modal>
    );
}
