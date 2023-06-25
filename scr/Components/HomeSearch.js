import React from 'react'
import { HStack, Input, Pressable,Box } from 'native-base'
import Colors from '../Colors'
import { Entypo } from '@expo/vector-icons';
function HomeSearch() {
  return (
        <HStack space={5} w={'full'} alignItems={'center'} px={6} py={4} bg={Colors.main} safeAreaTop>
                <Input 
                placeholder='Nike,Adidas,Campus....'
                bg={Colors.white}
                w={'85%'}
                h={12}
                type='search'
                variant={'filled'}
                borderWidth={0}
                _focus={{
                  bg:Colors.white,
                }}
                >
                </Input>
                <Pressable ml={1} >
                   <Entypo name="shopping-cart" size={24} color="black" />
                   <Box
                   px={1}
                   rounded="full"
                   position="absolute"
                   top={-16}
                   left={3}
                   bg={Colors.lightBlack}
                   _text={{
                    color:Colors.red,
                    fontsize:"11px"
                   }}
                   >
                      5
                   </Box>
                </Pressable>
                
        </HStack>
    )
}

export default HomeSearch