import React from 'react'

import {
    Box,
    Stack,
} from '@mui/material'

import {
    IconButton,
} from '@mui/joy';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function TopControl({ handleSearch, searchKeyword, setSearchKeyword }) {

    return (
        <Box>
            <Stack
                spacing={2}
                direction={'row'}
                justifyContent={'space-around'}
            >
                <div className="join">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full max-w-xs input input-bordered join-item"
                        value={searchKeyword || ''}
                        onChange={(e) => { setSearchKeyword(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                    />
                    <button
                        className="btn btn-circle join-item"
                        onClick={() => { handleSearch() }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>

                    </button>
                </div>
                {/* <div className="divider divider-horizontal" />
                <select className="w-full max-w-xs select select-bordered">
                    <option disabled selected>Filter by Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select> */}
            </Stack>
            <div className="divider" />
        </Box>
    )
}
