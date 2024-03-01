import React from 'react';
import DataGrid from '@/components/DataGrid';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';

function HomePage () {
  return (
      <div>
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button>
              <Link href={"/Author"} color="white">Author</Link>
            </Button>
            <Button>
              <Link href={"/Genre"} color="white">Genre</Link>
            </Button>
            <Button>
              <Link href={"/Title"} color="white">Title</Link>
            </Button>
          </ButtonGroup>
          <DataGrid books={[]}></DataGrid>
      </div>
  )
}

export default HomePage;