import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ErrorComponent from "./ErrorComponent";
import DataCard from "./DataCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(10).fill(1); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://child.onrender.com/api/sciencefiction?page=${page}`);
        setData(response.data); 
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  if (error) return <ErrorComponent message={"Error While Fetching Data"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {data.map((item) => (
              <DataCard
                key={item.id}
                name={item.title} // Assuming the API returns items with a title
                description={item.description} // Assuming a description field
                img={item.image} // Assuming an image URL field
              />
            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((_, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Home;
