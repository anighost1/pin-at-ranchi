"use client"

import React, { useEffect, useState } from 'react'
import configServ from '@/services/config'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import {
    Box,
    Stack,
    Chip,
    Grid,
} from '@mui/material';



export default function page({ params }) {

    const [itemData, setItemData] = useState({})
    const itemId = params.id

    const fetchItem = async () => {
        try {
            const result = await configServ.getItemByIdWithImg(itemId)
            console.log(result)
            setItemData(result)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (itemId) {
            fetchItem()
        }
    }, [])

    const showInMap = async () => {
        window.open(`https://maps.google.com?q=${itemData.longitude},${itemData.latitude}`)
    }

    return (
        <Stack
            direction={{
                xs: 'column',
                sm: 'row'
            }}
            justifyContent={'space-between'}
        // alignItems={'center'}
        // flexGrow={1}
        // border={2}
        >
            <Box
                width={{
                    xs: '100%',
                    sm: '60%'
                }}
                height={'100%'}
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    style={{
                        height: '90vh'
                    }}
                >
                    {itemData?.images?.map((item) => (
                        <SwiperSlide key={item._id}>
                            <Box >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    objectFit='contain'
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box
                className={`divider divider-horizontal`}
            />
            <Stack
                spacing={2}
                width={{
                    xs: '100%',
                    sm: '40%'
                }}
                sx={{
                    p: 2,
                }}
            >
                <h1 className='prose'
                    style={{
                        fontWeight: 600,
                        fontSize: '2em'
                    }}
                >
                    {itemData.name || "Loading..."}
                </h1>
                <h1 className='prose'
                    style={{
                        fontWeight: 300,
                        fontSize: '1em'
                    }}
                >
                    {`
                    ${itemData.addressLine1 || ""} 
                    ${itemData.addressLine2 ? ',' : ''}${itemData.addressLine2 || ""} 
                    ${itemData.city ? ',' : ''}${itemData.city || ""}
                    ${itemData.state ? ',' : ''}${itemData.state || ""}
                    ${itemData.pin ? ',' : ''}${itemData.pin || ""}
                    `}
                </h1>
                <button
                    className="btn btn-outline max-w-40"
                    onClick={showInMap}
                >
                    Show in Map
                </button>
                {itemData.keyword && (
                    <Grid
                        container
                        gap={1}
                    >
                        {itemData?.keyword?.map((item, index) => (
                            <Chip key={index} label={item} variant='outlined' />
                        ))}
                    </Grid>
                )}
            </Stack>
        </Stack>
    )
}
