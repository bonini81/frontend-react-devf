import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';




const LinkUpload = () => {

    const [linkTitle, setLinkTitle] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [linkDescription, setLinkDescription] = useState('');
    const [linkTag, setLinkTag] = useState('');
  
    const handleInput = (e) => {
      switch (e.target.name) {
  
        case "inputLinkTitle":
            setLinkTitle(e.target.value)
          break;
        case "inputLinkUrl":
          setLinkUrl(e.target.value)
          break;
        case "inputLinkDescription":
          setLinkDescription(e.target.value)
          break;
        case "inputLinkTag":
          setLinkTag(e.target.value)
          break;
        default:
          break;
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const jsonSend = {
        link_title: linkTitle,
        link_url: linkUrl,
        link_description: linkDescription,
        tag: linkTag
     
      }
      try {
        const res = await axios.post('https://bonini81-backend.herokuapp.com/api/v1/enlaces', jsonSend);
        alert('Successfully Added the Link')
      } catch (error) {
        alert('Error on Adding Link')
      }
    }
   


  return (
    <React.Fragment>
        <section className="form-signup">
      <h1 className="mb-4">Add your Link</h1>
      <Form onSubmit={handleSubmit} >

      
      <FormGroup>
          <Label>Add your Link Title</Label>
          <Input 
            type="text"
            id="linkTitle"
            name="inputLinkTitle" 
            placeholder="type your link Title"
            value={linkTitle}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Link Url</Label>
          <Input
            type="text" 
            name="inputLinkUrl" 
            id="linkUrl" 
            placeholder="type the link url"
            value={linkUrl}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Link Description</Label>
          <Input
            type="text"
            name="inputLinkDescription"
            id="linkDescription"
            placeholder="type your link description"
            value={linkDescription}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Add Tag</Label>
          <Input
            type="text"
            name="inputLinkTag"
            id="linkTag"
            placeholder="type your link tag"
            value={linkTag}
            onChange={handleInput} />
        </FormGroup>
     

        <Button>Submit</Button>
      </Form>
      </section>

    </React.Fragment>
  );
}
 
export default LinkUpload;