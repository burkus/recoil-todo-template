import { chakra } from '@chakra-ui/react'

export const AppContainer = chakra('div', {
    baseStyle: {
        borderWidth: '2px',
        borderColor: 'gray.200',
        borderRadius: 10,
        padding: 5
    }
})

export const RoundedImage = chakra('img', {
    baseStyle: {
        borderRadius: 10
    }
})