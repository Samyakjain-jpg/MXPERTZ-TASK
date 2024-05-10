import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DataCard = ({ id, title, image, description }) => (
  <Link to={`/data/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={image}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Image"}
      />
      <Heading size={"md"} noOfLines={1}>
        {title}
      </Heading>
      <Text noOfLines={2}>{description}</Text>
    </VStack>
  </Link>
);

export default DataCard;
