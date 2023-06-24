import React from 'react'
import { HStack, Input, Pressable, Text } from 'native-base'
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
                borderWidth={0}
                >
                </Input>
                <Pressable ml={1} >
                   <Entypo name="shopping-cart" size={24} color="black" />
                </Pressable>
        </HStack>
    )
}

export default HomeSearch