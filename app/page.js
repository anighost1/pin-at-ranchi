"use client"

import React, { useState, useEffect } from 'react'
import ItemCard from '@/components/ItemCard'
import {
    Grid
} from '@mui/material'
import configServ from '@/services/config'
import TopControl from '@/components/TopControl'
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
    const [itemData, setItemData] = useState({})

    const fetchItem = async (page = 1, limit = 10) => {
        const result = await configServ.getItemsWithImg(page, limit)
        console.log(result)
        setItemData(result)
    }

    useEffect(() => {
        fetchItem()
    }, [])

    return (
        <main className="flex flex-col items-center justify-between min-h-screen px-5 pt-5 sm:w-100">
            <TopControl />
            {!itemData.data && (
               <CircularProgress/>
            )}
            <Grid container spacing={2}>
                {itemData?.data?.map((item, index) => (
                    <Grid key={index} item xs={12} md={4}>
                        <ItemCard data={item} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
