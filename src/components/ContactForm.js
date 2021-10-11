import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "../hooks/form.hook";

const ContactForm = (props) => {
    const [contact, setContact, updateContact] = useForm('contact-form-test', {name: '', phone: ''});
    console.log(contact);

    const addContact = () => {
        axios.post('http://localhost:8080/contacts', contact).then(() => {
            console.log('contact was saved');
            console.log(contact);
        })
    }
    
    return (
        <Card sx={{ maxWidth: '90%', margin: 'auto' }}>
            <CardHeader title="Add Contact" />
            <CardContent>
                <TextField id="outlined-basic" name="name" onChange={updateContact} label="Name" variant="outlined" value={contact.name} />
                <TextField id="outlined-basic" name="phone" onChange={updateContact} label="Number" variant="outlined" value={contact.phone} />
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={addContact}>Submit</Button>
            </CardActions>
        </Card>
    )
}

export default ContactForm;