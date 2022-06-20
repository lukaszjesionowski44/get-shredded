import React from 'react'
import { Box, Typography } from '@mui/material'
import BackgroundVideo from '../assets/background-video.mp4'
import SearchExercises from '../components/SearchExercises'

const WelcomePage = () => {
  return (
    <Box height="90vh">
      <Typography color='white' align="center" pt={20} variant='h5' pb={2} sx={{ fontFamily: 'Facon' }}>
        Let's <br />
      </Typography>
      <Typography color='white' variant='h3' align="center" pb={2} sx={{ fontFamily: 'Facon' }}>
        Get
      </Typography>
      <Typography color='white' variant='h2' align="center" pb={6} sx={{ fontFamily: 'Facon' }}>
        Shredded
      </Typography>
      <video className='background__video' loop autoPlay muted >
        <source
          src={BackgroundVideo}
          type="video/mp4"
        />
      </video>
      <SearchExercises />
    </Box >
  )
}

export default WelcomePage