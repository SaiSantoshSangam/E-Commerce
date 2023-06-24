import React from 'react'
import {Box, Text} from 'native-base'
import Colors from '../Colors'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.Lightgrey}   >
           <HomeSearch/>
           <HomeProducts/>
    </Box>
    )
}

export default HomeScreen