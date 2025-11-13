import { useEffect, useState } from "react"
import { Grid, Typography, IconButton, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


export default function SubjectList({ list, updateList }) {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setSubjects(() => [...list])
        // alert(JSON.stringify(subjects))
    }, [list]);

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
                        Subjects
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton color="primary" >
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
                <ul>
                    {subjects.map((subject) =>
                        <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'start', padding: '1vmin' } }}>
                            - <img src={subject.icon} loading="lazy" alt="" width={'30vm'} />
                            <Stack direction="row" sx={{ display: { xs: 'flex', justifyContent: 'flex-start', alignItems: 'center' } }}>
                                <Typography component="p" variant='p' style={{ color: '#333440', paddingLeft: '0.5vmin' }}> {subject.text} </Typography>
                            </Stack>
                        </Stack>
                    )}
                </ul>
            </Grid>

        </>
    )
}
