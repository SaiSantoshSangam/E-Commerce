import React from 'react'
import { Box,Center,Text,Image } from 'native-base'
import Colors from '../Colors'
function NotVerfiyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop> 
       <Center w={'full'} h={'250'}>
          <Image
          source={require("../../assets/icon.bmp")}
          alt='logo'
          size={200}
          >

          </Image>
       </Center>
    </Box>
   )
}

export default NotVerfiyScreen