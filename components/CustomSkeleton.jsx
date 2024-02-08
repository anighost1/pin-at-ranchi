import React from 'react'
import {
    Skeleton,
    Stack,
} from '@mui/material'

export default function CustomSkeleton() {
    return (
        <Stack
            className="transition w-100 bg-base-100 h-80"
            spacing={1}
            sx={{
                borderRadius: '1rem',
                padding: 2
            }}>
            <Skeleton
                variant="rounded"
                sx={{
                    height: '80%'
                }}
            />
            <Skeleton variant="rounded" sx={{ height: '10%' }} />
            <Skeleton variant="rounded" sx={{ height: '10%' }} />
        </Stack>
    )
}
