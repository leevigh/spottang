import React from 'react'
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1rem 0' }}>
        <Flex style={{ 
            maxWidth: '1240px', 
            margin: '0 auto', 
            padding: '1rem 0' 
          }} 
            justify={'space-between'} 
            alignItems={'center'}>
            <Center>
                <Box>
                    <Image 
                      src={'/spottang.png'} 
                      width={92} 
                      height={29} 
                      alt="Spotta NG" 
                    />
                </Box>
            </Center>

            <Center>
              <Box>
                <Text fontSize='md'>
                  <Link href={'/auth/login'}>
                    LOGIN
                  </Link>
                </Text>
              </Box>
            </Center>
        </Flex>
    </div>
  )
}

export default Navigation
