import React from 'react'
import {
    CircularProgress,
    Stack,
} from '@mui/joy'

export default function ProgressOverlay() {
    return (
        <Stack
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                zIndex: (theme) => theme.zIndex.tooltip + 1,
                position: 'fixed',
                top: 0,
                height: '100vh',
                width: '100vw',
                backgroundColor:'#333333cc'
            }}
        >
            <CircularProgress variant='plain' size='lg' />
        </Stack>
    )
}
