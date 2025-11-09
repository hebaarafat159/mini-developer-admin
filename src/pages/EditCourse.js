
import { useState, useEffect } from 'react'
import { Typography, Grid, Stack, TextField, IconButton } from "@mui/material";
import { useParams } from 'react-router-dom'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function EditCourse() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_APP_PATH}/courses/${courseId}`)
            .then(response => response.json())
            .then(result => {
                setCourse(result.body);
            })
    }, [courseId]);


    function handleChange(e) {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
    }

    return (
        <Stack className='recent-blogs d-block screen'>
            <Typography component="h5" variant='h5' style={{ color: '#ed7d45', fontWeight: 'bolder', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Papyrus' }}>  {(course && course.title) ? "Edit Course" : "Add New Course"}</Typography>
            <Stack direction="column" spacing={2} >
                {/* Course Title */}
                <Typography
                    component="p"
                    sx={{ color: "#333440", fontWeight: "bold", mb: 1 }}> Title <span style={{ color: "red" }}>*</span>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            name="title"
                            label="Title"
                            value={(course && course.title) ? course.title : ""}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>
                </Grid>

                {/* Course Description */}
                <Typography
                    component="p"
                    sx={{ color: "#333440", fontWeight: "bold", mb: 1 }}> Description <span style={{ color: "red" }}>*</span>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            name="description"
                            label="Description"
                            value={(course) ? course.description : ""}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>
                </Grid>

                {/* Course Details */}
                <Typography
                    component="p"
                    sx={{ color: "#333440", fontWeight: "bold", mt: 2, mb: 1 }}>
                    Course Details <span style={{ color: "red" }}>*</span>
                </Typography>

                <Grid container spacing={1}>
                    {/* Language */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="language"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            name="language"
                            value={(course) ? course.language : ""}
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
                            value={(course) ? course.course_duration : 0}
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
                            value={(course) ? course.session_duration : ""}
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
                            value={(course) ? course.age : ""}
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
                            value={(course) ? course.price : 0}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>

                    {/* ranking */}
                    <Grid item xs={12} md={4}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label="Ranking"
                            type="number"
                            name="Ranking"
                            value={(course) ? course.ranking : 0}
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

            </Stack>
        </Stack>
    )
}
