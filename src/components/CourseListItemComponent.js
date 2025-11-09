import React from 'react'
import { Card, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export default function CourseListComponent({ course }) {
  const path = `/our-courses/${course.seo_slug}`
  const editPath = `/edit-course/${course.seo_slug}`
  const deletePath = `/delete-course/${course.seo_slug}`
  return (
    <Card className={'course_card'} component={'a'} href={path} style={{ textDecoration: 'none' }}>
      <div
        className={'course_card_image'}
        style={{ backgroundImage: `url("${course.cover_image}")` }}>
      </div>

      <Stack className={'course_card_details'}>
        <Typography component="p" variant='p' style={{ color: '#333440', fontWeight: 'bolder' }}>{course.title}</Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Age:</span> {course.age}+ </Typography>
        <Typography component="p" variant='p' style={{ color: '#333440' }}> <span className={'course_card_bold_text'}>Language:</span> {course.language}</Typography>

        <Stack direction="row" spacing={1} className={'course_card_details'}>
          <Link to={{ pathname: editPath }}>
            <Button variant="contained" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Link>
          <Link to={{ pathname: deletePath }}>
            <Button variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Link>
        </Stack>

      </Stack>
    </Card >
  )
}