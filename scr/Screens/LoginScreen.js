import React from 'react'
import { Box, Heading, Image, VStack,Input, Button, Pressable,Text } from 'native-base'
import Colors from '../Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
function LoginScreen() {
  return (
    <Box flex={1} bg= {Colors.black}>
        <Image 
          flex={1}
          alt="logo"  
          resizeMode="cover"
          size="lg"
          w="full"
          source={require("../../assets/LoginScreen.jpg")}
        ></Image>
        <Box 
        w="full" 
        h="full" 
        position="absolute"
        top="0"
        px="6"
        justifyContent="center">
            <Heading>LOGIN</Heading>
            <VStack space={5} pt={'8'}>
                {/* Email Input*/}
                <Input
                size={'15'}
                InputLeftElement={
                      <MaterialIcons name="email" size={24} color="black" />
                    }                
                variant="underlined"
                placeholder="User@gmail.com"
                placeholderTextColor={Colors.underline}
                w="70%"
                pl={2}
                color={Colors.black}
                borderBottemColor={Colors.underline}
                />
                {/* Password Input*/}
                <Input
                InputLeftElement={
                  <Ionicons name="eye-sharp" size={24} color="black" />
                    }                
                variant="underlined"
                placeholder="***************"
                placeholderTextColor={Colors.underline}
                w="70%"
                type='password'
                pl={2}
                color={Colors.black}
                borderBottemColor={Colors.underline}
                />
       
            </VStack>
            <Button 
            _pressed={{
              bg:Colors.main,
            }}
            my={30} 
            w={'40%'} 
            rounded={40}
            bg={Colors.black}
            >
              Login
            </Button>
            <Pressable mt={0} pl={10}>
              <Text color={Colors.black}>Sing Up</Text>
            </Pressable>
        </Box>
    </Box> 
  )
}

export default LoginScreen