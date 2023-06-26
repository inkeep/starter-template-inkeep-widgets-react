import {
  Heading,
  Highlight,
} from '@chakra-ui/react';

interface HeadingTextProps {
  highlight?: string | Array<string>;
  children: string;
}

function HeadingText({ children, highlight = '' }: HeadingTextProps) {
  return (
    <Heading
      as="h2"
      fontWeight="normal"
      size="md"
      mb={4}
    >
      <Highlight
        styles={{
          fontWeight: 'bold',
          color: 'gray.900',
        }}
        query={highlight}
      >
        {children}
      </Highlight>
    </Heading>
  );
}
export default HeadingText;
