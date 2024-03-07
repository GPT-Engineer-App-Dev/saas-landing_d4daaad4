import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Flex alignItems="center" mb={4}>
        <Icon as={icon} fontSize="3xl" mr={4} />
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </Flex>
      <Text>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Supercharge Your Business with Our SaaS Solution
              </Heading>
              <Text fontSize="xl" mb={6}>
                Streamline your operations, boost productivity, and grow your business with our powerful software.
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Flex justify="center" align="center">
              <Image src="https://images.unsplash.com/photo-1634496994539-ebffdbfe6e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MDk3OTg0OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Dashboard" borderRadius="md" boxShadow="lg" />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose Us?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature icon={FaRocket} title="Fast & Easy Setup" text="Get up and running in minutes with our intuitive setup process." />
            <Feature icon={FaChartLine} title="Powerful Analytics" text="Gain valuable insights into your business with our advanced analytics." />
            <Feature icon={FaShieldAlt} title="Secure & Reliable" text="Rest easy knowing your data is safe and secure with our top-notch security measures." />
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Take Your Business to the Next Level?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Sign up now and experience the difference our SaaS solution can make.
          </Text>
          <Button colorScheme="purple" size="lg">
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
