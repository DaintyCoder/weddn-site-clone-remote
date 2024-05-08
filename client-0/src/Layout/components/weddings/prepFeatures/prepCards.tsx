import { Box, Text, Flex, TableContainer, Icon, Table, Tbody, Td, Th, Thead, Tr, /* useColorMode */ } from "@chakra-ui/react";
import { GoArrowUp } from "react-icons/go";

export interface CardProps {
  title: string;
  desc: string;
  content: React.ReactNode;
  baseHeight?: string;
  mdHeight?: string;
  space?: number;
}

interface RsvpCardProps {
  name: string;
  email: string;
  number: string;
}

const rsvpItems: Array<RsvpCardProps> = [
  { name: "The Ofohs", email: "qadams@hotmail.com", number: "080 6333495" },
  { name: "Michael Bamiloye", email: "escott@outlook.com", number: "080 3050491" },
  { name: "Leslie Isah", email: "gthomas@icloud.com", number: "080 8376666" },
  { name: "Rukayat Yaro", email: "vlopez@aol.com", number: "080 7274142" },
];

const SmallBox = () => {
  return (
    <Box
      width={{ base: 2, md: 4 }}
      h={{ base: 2, md: 4 }}
      borderRadius={{ base: "2px", md: "5px" }}
      bgColor="rgba(253, 253, 253, 1)"
      border="none"
    />
  );
};

const Card: React.FC<CardProps> = ({ title, desc, content, baseHeight }) => {
  return (
    <Box
      pos="relative"
      bgColor="rgba(27, 29, 34, 1)"
      h={{ base: baseHeight, md: "559px" }}
      p={{ md: 8 }}
      pt={{ base: 8 }}
      px={{ base: 8 }}
    >
      <Flex flexDir="column" gap={2}>
        <Text
          color="rgba(120, 182, 146, 1)"
          fontSize={{ base: "20px", md: "28px" }}
          fontFamily="NewSpirit"
          fontWeight={400}
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "20px" }}
          fontWeight={400}
        >
          {desc}
        </Text>
      </Flex>
      {content}
    </Box>
  );
};

export const TableData = () => {
  return (
    <TableContainer>
      <Table bgColor="rgb(33, 43, 50)" variant="unstyled">
        <Thead bgColor="rgba(120, 182, 146, 0.5)">
          <Tr>
            <Th py={{ base: 4, md: 7 }} px={{ base: 2, md: 4 }}>
              <SmallBox />
            </Th>
            <Th textTransform="none" fontWeight={500} fontSize={{ base: "6.33px", md: "14px" }} px={{ base: 2 }}>
              <Flex alignItems="center">
                <Text>Name</Text>
                <Icon as={GoArrowUp} />
              </Flex>
            </Th>
            <Th textTransform="none" fontWeight={500} fontSize={{ base: "6.33px", md: "14px" }}>Email</Th>
            <Th textTransform="none" fontWeight={500} fontSize={{ base: "6.33px", md: "14px" }}>Telephone Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rsvpItems.map((item, idx) => (
            <Tr key={idx}>
              <Td py={{ base: 1, md: 7 }} px={{ base: 2, md: 4 }}>
                <SmallBox />
              </Td>
              <Td px={{ base: 2 }}>
                <Text fontSize={{ base: "8px", md: "15px" }}>{item.name}</Text>
              </Td>
              <Td>
                <Text fontSize={{ base: "8px", md: "15px" }}>{item.email}</Text>
              </Td>
              <Td>
                <Text fontSize={{ base: "8px", md: "15px" }}>{item.number}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Card;