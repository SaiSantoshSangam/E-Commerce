import React from 'react'
import { Box,Center,Image, VStack, Button } from 'native-base'
import Colors from '../Colors'
 function NotVerfiyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop> 
       <Center w={'full'} h={'250'} pt={100}>
          <Image
          source={require("../../assets/icon.bmp")}
          alt='logo'
          size={200}
          
          >

          </Image>
       </Center>
        <VStack space={5} px={10} pt={10} alignItems={'center'}>
          <Button 
            rounded={'full'}
            w={'full'} 
            h={55}
            bg={Colors.black}
            _text={{
               color:Colors.white,
               fontWeight:'bold'
            }} 
            _pressed={{bg:Colors.black}}
            /* onPress={onpress} */>
            REGISTER
          </Button>
          <Button 
            rounded={'full'}
            w={'full'} 
            h={55}
            bg={Colors.black}
            _text={{
               color:Colors.white,
               fontWeight:'bold'
            }} 
            _pressed={{bg:Colors.black}}
            /* onPress={onpress} */>
            LOGIN
          </Button>
      
       </VStack> 
    </Box>
   )
}

export default NotVerfiyScreen