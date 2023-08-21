"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useLogin } from "../hooks/loginHook";

export default function Login() {
  const { handleLogin, handchange } = useLogin();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login In Here!</Heading>
          <Text fontSize={"3xl"} color={"green"}>
            Circle
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handchange} name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handchange} name="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"green"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleLogin}
                borderRadius={"20px"}
                bg={"green"}
                color={"white"}
                _hover={{
                  bg: "green",
                }}
              >
                Login
              </Button>
              <Stack>
                <Text
                  align={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  gap={2}
                >
                  Create Account ?
                  <Link to={"/register"}>
                    <Text color={"green"}>Create</Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}