import Image from "next/image";
import { 
  Box, Button, 
  Flex, Heading, 
  Input, InputGroup, 
  InputLeftElement, 
  Stack, Text } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import SearchIcon from "@/components/icons/SearchIcon";

export default function Home() {

  // const isMobileScreen = useMediaQuery('(max-width: 800px)', {
  //   ssr: true,
  //   fallback: false,
  // })

  return (
    <main className={styles.main}>
      <Navigation />

      <div style={{ maxHeight: '1024px' }}>
        <Flex style={{ 
          maxWidth: '1240px', 
          margin: '0 auto'
        }} alignItems={'center'} justify={'space-between'}>
          <Box style={{ maxWidth: '507px' }}>
            <Box mb={'12px'}>
              <Box>
                <Heading as='h1' fontSize='64px'>
                  Find a place you will love to live!
                </Heading>
              </Box>

              <Box>
                <Text>
                See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
                </Text>
              </Box>
            </Box>

            <Box>
              <Stack spacing={4}>
                <InputGroup mb={'10px'}>
                  <InputLeftElement pointerEvents='none'>
                    <SearchIcon />
                  </InputLeftElement>
                  <Input type='text' placeholder='Enter Address' px={'2rem'} />
                </InputGroup>

              </Stack>
                <Button backgroundColor={'#5378F6'} color={"#FBFAFC"} size='md'>
                  SEARCH
                </Button>
            </Box>
          </Box>
          <Box display={{ base: 'none', md: 'none', lg: 'block' }} style={{ 
            position: 'relative', 
            width: '506px', 
            height: '1000px'}}>
            <Image src="/hero.png" alt="hero" fill={true} objectFit="cover" />
          </Box>
        </Flex>
      </div>

    </main>
  );
}
