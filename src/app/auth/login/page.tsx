import Navigation from '@/components/Navigation'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <div style={{ backgroundColor: '#F3F7FE'}}>
        <Navigation />

        <Box 
            as={Flex} 
            flexDirection={'column'} 
            justify={'center'} 
            alignItems={'center'} 
            maxW={'348px'} 
            mx={'auto'}
            backgroundColor={'white'}
        >
            <Text>Log In</Text>
            <FormControl >
                <Input mb={'8px'} type='email' placeholder='E-mail' />

                <Input mb={'8px'} type='email' placeholder='Password' />

                <Button w={'100%'}>Login</Button>
            </FormControl>
        </Box>
    </div>
  )
}

export default page