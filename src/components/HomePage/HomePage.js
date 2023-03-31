import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Phone book
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A telephone directory, commonly called a telephone book, telephone
          address book, phonebook, or the white and yellow pages, is a listing
          of telephone subscribers in a geographical area or subscribers to
          services provided by the organization that publishes the directory.
        </Typography>
      </CardContent>
    </Card>
  );
}
