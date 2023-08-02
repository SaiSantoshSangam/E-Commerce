import React from 'react'
import { Box, Flex, ScrollView, Text } from 'native-base'
import pro from '../Data/Products'

function HomeProducts() {
  return (
      <ScrollView flex={1}>
        <Flex
        flexWrap={'wrap'}
        direction='row'
        justifyContent={'space-between'}
        px={5}
        >
            {
              pro.map((items)=>(
                <Text> {items.image} </Text>  
              ))
            }
        </Flex>

      </ScrollView>
    );
}

export default HomeProducts