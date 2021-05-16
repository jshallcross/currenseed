
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Image, Flex, Text, Divider, Stack, Center, SimpleGrid, Link, } from '@chakra-ui/react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SELLER } from "../utils/queries";

function buyerProfile() {
    // const { data } = useQuery(QUERY_SELLER);
    let user;

    // if (data) {
    //     user = data.seller;
    // }

    user={
        _id :"1",
        firstName:"Raed",
        lastName: "Altaki",
        email:"raed@hotmail.com",
        purchases:
        [
            {
                _id:"2",
                purchaseDate:"05-15-2021",
                products:
                [
                    {
                        _id:"3",
                        name:"apple",
                        description:"",
                        image:"jewelry-1-min",
                        quantity: 2,
                        price: 30
                    },
                    {
                        _id:"3",
                        name:"apple",
                        description:"",
                        image:"jewelry-1-min",
                        quantity:4,
                        price: 30
                    }
                ],
                sellerId: "4",
                buyerId: "1"
            },
            {
                _id:"2",
                purchaseDate:"05-15-2021",
                products:
                [
                    {
                        _id:"3",
                        name:"apple",
                        description:"kkkkkkk",
                        image:"jewelry-1-min",
                        quantity:5,
                        price: 30
                    }
                ],
                sellerId: "4",
                buyerId: "1"
            }
        ],
        sales:
        [
            {
                _id: 5,
                purchaseDate: 1621100000000,
                products:
                [
                    {
                        _id: "6",
                        name: "HANDMADE ITEMS",
                        description: "hhhhh",
                        image: "jewelry-1-min",
                        quantity: 8,
                        price: 20
                    }
                ],
                sellerId:1,
                buyerId:9
            }
        ],
        seeds :50
    };

    return (
        <Box>   
            <Box margin={10}>
                <Flex height="100hv" alignItems="top" justifyContent="space-between">  
                    <Box>   
                        <Text m={2} fontSize="xx-large" fontWeight="semibold" lineHeight="short">
                            Profile for {user.firstName} {user.lastName}
                        </Text>
                        <Text m={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                            Location: 
                        </Text>
                    </Box>
                    <Text m={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        seeds: {user.seeds}
                    </Text>
                </Flex>
            </Box>
            <Divider orientation="horizontal" />
            <Box d="flex" height="100hv" alignItems="top" justifyContent="space-around" flexWrap="wrap">
                <Box minWidth="450px" textAlign="center">
                   <Text color="brand.500" textDecoration="underline" mt="20px" fontSize="xl" fontWeight="semibold" lineHeight="tall">
                        Order History
                    </Text>
                    <Box borderWidth="1px" width="90%" minHeight="300px" padding="10px" my="20px" mx="auto" textAlign="center">
                        {user.purchases.map((order) => (
                            <Box key={order._id} m="10px" fontSize="xl" fontWeight="semibold" lineHeight="short">
                                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                </Text>
                                <Box d="flex" flexWrap="wrap" alignItems="baseline">
                                    {order.products.map(({ _id, image, name,quantity, price }, index) => (
                                        <Box borderWidth="1px" width="150" borderRadius="12px" key={index} m="10px" alignItems="center">
                                            <Link as={ReactLink} to={`/products/${_id}`}>
                                                <Image
                                                borderTopRadius ="12px"
                                                width="150px"
                                                alt={name}
                                                src={`/images/${image}.jpg`}
                                                />
                                            </Link>
                                            <Box width="150px"  color="brand.900" borderBottomRadius="12px">
                                                <Text p="5px" flexWrap="wrap">{name}</Text>
                                                <Text p="5px">Qty:{quantity}</Text>
                                                <Text p="5px">${price}</Text>
                                            </Box>
                                        </Box>
                                    ))}       
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box minWidth="450px" textAlign="center">
                    <Text color="brand.500" textDecoration="underline" mt="20px" fontSize="xl" fontWeight="semibold" lineHeight="tall">
                        Selling History
                    </Text>
                    <Box borderWidth="1px" width="90%" minHeight="400px" padding="10px" my="20px" mx="auto" textAlign="center">
                        {/* <orderHistory/> */}
                        {user.sales.map((order) => (
                            <Box key={order._id} m="10px" fontSize="xl" fontWeight="semibold" lineHeight="short">
                                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                </Text>
                                <Box d="flex" flexWrap="wrap" alignItems="baseline">
                                    {order.products.map(({ _id, image, name,quantity, price }, index) => (
                                        <Box borderWidth="1px" width="150" borderRadius="12px" key={index} m="10px" alignItems="center">
                                            <Link as={ReactLink} to={`/products/${_id}`}>
                                                <Image
                                                borderTopRadius ="12px"
                                                width="150px"
                                                alt={name}
                                                src={`/images/${image}.jpg`}
                                                />
                                            </Link>
                                            <Box width="150px"  color="brand.900" borderBottomRadius="12px">
                                                <Text p="5px" flexWrap="wrap">{name}</Text>
                                                <Text p="5px">Qty:{quantity}</Text>
                                                <Text p="5px">${price}</Text>
                                            </Box>
                                        </Box>
                                    ))}         
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box> 
    )
}; 

export default buyerProfile;
