
import { useState, useEffect } from 'react'
import { Typography, Grid, Stack, TextField, IconButton, Button, Divider } from "@mui/material";
import { useParams } from 'react-router-dom'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LevelList from '../components/LevelList'

export default function EditCourse() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({
        title: "",
        slogan: "",
        age: 0,
        language: "",
        cover_image: "",
        link: "",
        periority: 1, // periority to appear on order of courses
        course_duration: 0, // How long the course will be running.
        session_duration: 0, // How long each session is.
        price: 0,
        type: "In-person or online",
        seo_slug: "",
        seo_title: "",
        seo_description: "",
        prerequisite_courses: [], // saved courses objectIds
        description: "",
        course_subjects: [],
        course_skills: [],
        levels: [],
        is_super: false,
    })

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

    function updateList(levelsList) {
        setCourse((prevCourse) => ({ ...prevCourse, [course.levels]: levelsList }));
    }

    function submit() {
        alert(JSON.stringify(course));
    }

    return (
        <Stack className='recent-blogs d-block screen form_container'>
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

                {/* SEO Details */}
                <Typography
                    component="p"
                    sx={{ color: "#333440", fontWeight: "bold", mt: 2, mb: 1 }}>
                    SEO Details <span style={{ color: "red" }}>*</span>
                </Typography>

                <Grid container spacing={1}>
                    {/* slug */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="SEO Slug"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            name="seo_slug"
                            value={(course) ? course.seo_slug : ""}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>

                    {/* title */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label="SEO Title"
                            name="seo_title"
                            value={(course) ? course.seo_title : ""}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>

                    {/* SEO Description*/}
                    <Grid item xs={12} md={12}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label="SEO Description"
                            name="seo_description"
                            value={(course) ? course.seo_description : ""}
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
                    }}>

                    <Grid item xs={8}>
                        <Typography
                            component="p"
                            sx={{ color: "#333440", fontWeight: "bold" }}>
                            Outcomes
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton color="primary">
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Divider sx={{ mx: "auto", mt: 2 }} />
                {/* Levels component view */}
                <LevelList list={course?.levels ?? []} updateList={updateList} />

                {/* Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <Button
                        variant="contained"
                        onClick={() => submit()}
                        className="orange_btn">

                        Submit
                    </Button>
                </div>
            </Stack>
        </Stack>
    )
}
