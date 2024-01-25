"use client"

import React, { useState, useEffect } from 'react'
import ItemCard from '@/components/ItemCard'
import {
    Grid,
    Box,
} from '@mui/material'
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import { Button } from '@mui/joy';
import configServ from '@/services/config'
import TopControl from '@/components/TopControl'
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Home() {
    const [itemData, setItemData] = useState({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [searchKeyword, setSearchKeyword] = useState('')

    const fetchItem = async (page = 1, limit = 10, search = searchKeyword) => {
        const result = await configServ.getItemsWithImg(page, limit, search)
        console.log(result)
        setItemData(result)
    }

    useEffect(() => {
        fetchItem()
    }, [])

    const handleSearch = () => {
        fetchItem()
    }

    function createArray(number) {
        const resultArray = Array.from({ length: number }, (_, index) => index + 1);
        return resultArray;
    }

    const pageSwitch = (page, limit) => {
        fetchItem(page, limit)
    }
    const nextPage = () => {
        if (itemData.next) {
            pageSwitch(itemData.next?.page, itemData.next?.limit)
        }
    }
    const prevPage = () => {
        if (itemData.prev) {
            pageSwitch(itemData.prev?.page, itemData.prev?.limit)
        }
    }

    return (
        <main className="flex flex-col items-center justify-between min-h-screen px-5 pt-5 sm:w-100">
            <TopControl
                handleSearch={handleSearch}
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
            />
            {!itemData.data && (
                <CircularProgress />
            )}
            {itemData.data === '' && (
                <CircularProgress />
            )}
            <Grid container spacing={2}>
                {itemData?.data?.map((item, index) => (
                    <Grid key={index} item xs={12} md={4}>
                        <ItemCard data={item} />
                    </Grid>
                ))}
            </Grid>
            <Box>
                <div className="divider" />
                <Box
                    className="Pagination-laptopUp"
                    sx={{
                        pb: 2,
                        gap: 1,
                        [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    <Button
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        startDecorator={<KeyboardArrowLeftIcon />}
                        onClick={prevPage}
                    >
                        Previous
                    </Button>

                    <Box sx={{ flex: 1 }} />
                    {createArray(itemData.totalPage).map((page) => (
                        <IconButton
                            key={page}
                            size="sm"
                            variant={itemData.currentPage === page ? 'outlined' : 'plain'}
                            color="neutral"
                            onClick={() => pageSwitch(page, itemData.currentLimit)}
                        >
                            {page}
                        </IconButton>
                    ))}
                    <Box sx={{ flex: 1 }} />

                    <Button
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        endDecorator={<KeyboardArrowRightIcon />}
                        onClick={nextPage}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </main>
    )
}
