import { IHighlight } from 'colighter';
import React from 'react';

import { Avatar, AvatarGroup, Box, Text } from '@chakra-ui/react';

import { useCollabHighlights } from '../hooks/useCollabHighlights';
import { theme } from '../theme';

export function HomeHighlights() {
  const [highlights] = useCollabHighlights();

  return (
    <>
      {highlights.map((highlight) => (
        <>
          <HighlightView
            text={highlight.text}
            author={highlight.author}
            key={highlight.hashId}
          />
        </>
      ))}
      {
        <AvatarGroup mt={4} size='md' max={3}>
          {highlights.map(({ author, hashId }) => (
            <Avatar
              name={author}
              src='https://bit.ly/code-beast'
              key={hashId}
            />
          ))}
        </AvatarGroup>
      }
    </>
  );
}

type HighlightViewProps = Pick<IHighlight, 'text' | 'author'>;

const HighlightView = ({ text }: HighlightViewProps) => {
  return (
    <Box border={`1px solid ${theme.palette.lightGray}`} borderRadius='7px'>
      <Text textAlign='left' padding='12px' fontStyle='italic'>
        {text}
      </Text>
    </Box>
  );
};
