import React from 'react'
import {Button, Text} from './styles'

export default function ButtonDefault ({text, bg, top, onPress, disabled}) {
    return (
        <Button bg={bg} top={top} onPress={onPress} disabled={disabled}>
            <Text>{text}</Text>
        </Button>
    )
}