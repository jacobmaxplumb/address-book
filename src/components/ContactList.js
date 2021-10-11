import { Card, Box, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios';
import React from 'react';

export class ContactList extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/contacts').then(results => {
            this.setState({contacts: results.data});
        })
    }

    render() {
        return (
            <Box>
                <h1>Contact List</h1>
                {this.state.contacts.map((c, i) => (
                    <Card key={i} variant="outlined" sx={{ maxWidth: '90%', margin: 'auto' }}>
                        <CardContent>
                            <div>{c.name}</div>
                            <div>{c.phone}</div>
                        </CardContent>
                        <CardActions>
                            <Button varian="contained">Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        )
    }
}