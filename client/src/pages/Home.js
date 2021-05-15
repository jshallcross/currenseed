import React, { useState } from "react";

import { Box, Image, Flex, Text, Button,Stack, Container, SimpleGrid } from "@chakra-ui/react";


const Home = () => {

  return (
		<Categories></Categories>
	)
	}


	const Categories = () => {
		const data = [
			{id: 1, title: "Craft Beers", content: "Check out local vendors selling their craft beers", src:"beer-1-min"},
			{id: 2, title: "Fresh Produce", content: "Check out local farmers selling their fresh produce", src:"produce-3-min"},
			{id: 3, title: "Jewelry", content: "Check out vendors selling their handmade jewelry", src:"jewerly-1-min",key: 3},
			{id: 4, title: "Artisan Cheese", content: "Check out local vendors selling their artisan cheese", src:"cheese-2-min"},
			{id: 5, title: "Fresh Meat", content: "Check out local vendors selling their fresh meats", src:"meat-2-min"},
			{id: 6, title: "Handmade Items", content: "Check out vendors selling handmade items", src:"soap-2-min"},
			{id: 7, title: "Baked Goods", content: "Check out vendors selling homemade baked items", src:"baked-goods-2-min"},
			{id: 8, title: "Wine", content: "Check out what local wineries have to offer", src:"beer-2-min"}
		]
		return (
			
		<Flex m="5" justifyContent="center">
			<Stack m="2" alignContent="center">
				<Box>
					<Container w={[300, 400, 560]}>Currenseed is an online farmer’s market. 
					There is no real world currency here. Products are paid for using “seeds” which 
					can be purchased via credit card, earned by doing certain tasks such as logging in, 
					and by interacting with the website (ie. Buying and making sales). 
					Buyer’s can browse kiosks based on their location, to ensure that they are able to buy 
					fresh produce and other items locally.</Container>
				</Box>
				<Box>
					<Container fontSize="3xl" align="center" fontWeight="bold" color="brand.500">Niagara Region</Container>
				</Box>
	
				<SimpleGrid columns={[1, null, 2, null, 4]} gap={4}>
					{data.map((item) => {
						return <Box p="5" maxW="320px" borderWidth="1px" borderRadius="12px"  >
								<Image  borderRadius="md" src= "../public/images/{src}.jpg" alt="Test"/>
									<Flex  mt={2} justifyContent="center">
										<Text 
										
											textTransform="uppercase"
											fontSize="xl"
											fontWeight="bold"
											>{item.title}
										</Text>
									</Flex>
										<Text   mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" align="center">
											{item.content}
										</Text>
									<Flex mt={2} justifyContent="center">
										<Button
											color={["brand.500"]} 
											size="lg"
											bg={["brand.800"]}
											_hover={{
												bg: ["white"]
												}}
											>See More
										</Button>
									</Flex>
							</Box>
						})}
					</SimpleGrid>
				</Stack>
	
			</Flex>
		)
	}
export default Home;

