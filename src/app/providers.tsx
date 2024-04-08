"use client"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

// const breakpoints = {
//     sm: '200px',
//     lg: '800px'
// }

// const theme = extendTheme({ breakpoints });

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}
