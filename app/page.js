"use client"

import React, { useState, useEffect } from 'react'
import ItemCard from '@/components/ItemCard'
import {
    Grid
} from '@mui/material'
import configServ from '@/services/config'

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
        <main className="flex flex-col items-center justify-between min-h-screen p-24 sm:w-100">
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
