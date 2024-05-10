import { Button, HStack, TagLeftIcon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} >
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/" >BraineyLingo</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/" >Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/" >LearderBoard</Link>
        </Button>
      </HStack>
    </div>
  )
}

export default Header
